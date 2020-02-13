import { Component, OnInit } from '@angular/core';
import { Upload } from 'src/app/shared/upload';
import { UploadService } from 'src/app/services/upload.service';

@Component({
  selector: 'app-vdo',
  templateUrl: './vdo.component.html',
  styleUrls: ['./vdo.component.css']
})
export class VdoComponent implements OnInit {
  selectedFiles: FileList;
  currentUpload: Upload;
  fileData: File = null;
  previewUrl: any = null;
  public thumbnailData: string;

  constructor(private upSvc: UploadService) { }

  ngOnInit() {
  }

  public add(): void {
    this.upSvc.promptForVideo().then(videoFile => {
      //console.dir(videoFile);
      return this.upSvc.generateThumbnail(videoFile);
    }).then(thumbnailData => {
      //console.dir(thumbnailData);
      this.thumbnailData = thumbnailData;
    })
  }
  uploadSingle() {
    let file = this.selectedFiles.item(0)
    this.currentUpload = new Upload(file);
    this.upSvc.pushUpload(this.currentUpload)
  }

  fileProgress(fileInput: any) {
    this.fileData = <File>fileInput.target.files[0] || null;
    this.preview();
  }

  // Preview File
  preview() {
    // Show preview 
    var mimeType = this.fileData.type;
    if (mimeType.match(/image\/*/) == null) {
      return;
    }

    var reader = new FileReader();
    reader.readAsDataURL(this.fileData);
    reader.onload = (_event) => {
      this.previewUrl = reader.result;
    }
  }

}
