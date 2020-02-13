import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Upload } from '../shared/upload';
import { AngularFireDatabase } from 'angularfire2/database';
import * as firebase from 'firebase/app';
import 'firebase/firestore';
@Injectable({
  providedIn: 'root'
})
export class UploadService {

  private basePath: string = '/uploads';
  private basePathVdo: string = '/vdo';
  uploads: Upload[];

  storageRef = firebase.storage().ref();
  constructor(private db: AngularFireDatabase,@Inject(DOCUMENT) private document: Document) { }

  pushUpload(upload: Upload) {

    let uploadTask = this.storageRef.child(`${this.basePath}/${upload.file.name}`).put(upload.file);
    uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,
      (snapshot) => {
        // upload in progress
        upload.progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
      },
      (error) => {
        // upload failed
        console.log(error)
      },
      () => {
        // upload success
        upload.url = uploadTask.snapshot.downloadURL
        upload.name = upload.file.name
        this.saveFileData(upload,'img');
      }
    );
  }

  uploadVdo(upload: Upload) {
    let upTask = this.storageRef.child(`${this.basePathVdo}/${upload.file.name}`).put(upload.file);
    upTask.on(
      firebase.storage.TaskEvent.STATE_CHANGED,
      (snapshot) => {
        upload.progress = (snapshot.bytesTransferred / snapshot.totalBytes) + 1000;
      },
      (error) => {
        console.log(error);
      },
      () => {
        upload.url = upTask.snapshot.downloadURL;
        upload.name = upload.file.name;
        this.saveFileData(upload,'vdo');
      }
    )
  }


  // Writes the file details to the realtime db
  private saveFileData(upload: Upload, flag: string) {
    console.log('flag -> ' + flag);
    switch (flag) {
      case 'img':
        this.db.list(`${this.basePath}/`).push(upload);
        break;
      case 'vdo':
        this.db.list(`${this.basePathVdo}/`).push(upload);
        break;
      default:
        break;
    }
  }



  // ====================== For VDO
  public promptForVideo(): Promise<File> {
    return new Promise<File>((resolve, reject) => {
      // make file input element in memory
      const fileInput: HTMLInputElement = this.document.createElement('input');
      fileInput.type = 'file';
      fileInput.accept = 'video/*';
      fileInput.setAttribute('capture', 'camera');
      // fileInput['capture'] = 'camera';
      fileInput.addEventListener('error', event => {
        reject(event.error);
      });
      fileInput.addEventListener('change', event => {
        resolve(fileInput.files[0]);
      });
      // prompt for video file
      fileInput.click();
    });
  }

  public generateThumbnail(videoFile: Blob): Promise<string> {
    const video: HTMLVideoElement = this.document.createElement('video');
    const canvas: HTMLCanvasElement = this.document.createElement('canvas');
    const context: CanvasRenderingContext2D = canvas.getContext('2d');
    return new Promise<string>((resolve, reject) => {
      canvas.addEventListener('error',  reject);
      video.addEventListener('error',  reject);
      video.addEventListener('canplay', event => {
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
        context.drawImage(video, 0, 0, video.videoWidth, video.videoHeight);
        resolve(canvas.toDataURL());
      });
      if (videoFile.type) {
        video.setAttribute('type', videoFile.type);
      }
      video.preload = 'auto';
      video.src = window.URL.createObjectURL(videoFile);
      video.load();
    });
  }

}
