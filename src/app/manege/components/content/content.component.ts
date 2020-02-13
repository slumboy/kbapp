import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ServiceService } from '../../service.service';
import { NgForm } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';
import { UploadService } from 'src/app/services/upload.service';
import * as _ from "lodash";
import { Upload } from 'src/app/shared/upload';


const uploadAPI = 'http://localhost:4000/api/upload'; // better use a service class

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  @ViewChild('demoForm', { read: ElementRef, static: true }) demoForm?: NgForm;
  @ViewChild('editor', { static: true }) editor;

  fileData: File = null;
  previewUrl: any = null;
  fileUploadProgress: string = null;
  uploadedFilePath: string = null;

  selectedFiles: FileList;
  currentUpload: Upload;

  // สร้าง Model สำหรับ Form
  modelFrm = {
    img: File,
    topic: '',
    msg: 'xx.png'
  }
  constructor(private service: ServiceService,
    private upSvc: UploadService,
    private firebase: AngularFirestore) { }

  ngOnInit() { }

  detectFiles(event) {
    this.selectedFiles = event.target.files;
  }

  // เพิ่มข้อมูล Content
  add(data: NgForm) {

    // เพิ่มเข้าใน collection ก่อน 
    // this.firebase.collection('contents').add(data.value);

    // เพิ่มเข้าใน Storage
    this.uploadSingle();
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

  onSubmit() {
    const formData = new FormData();
    console.log(formData);
  }
}
