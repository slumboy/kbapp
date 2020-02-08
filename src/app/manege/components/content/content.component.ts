import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ServiceService } from '../../service.service';
import { NgForm } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';
import { map, catchError } from 'rxjs/operators';
import { HttpEventType, HttpErrorResponse } from '@angular/common/http';
import { UploadService } from 'src/app/services/upload.service';
import { of } from 'rxjs';


const uploadAPI = 'http://localhost:4000/api/upload'; // better use a service class

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  @ViewChild( 'demoForm',{read: ElementRef,static:true} ) demoForm?: NgForm;
  @ViewChild('editor',{static: true}) editor;

  fileData: File = null;
  previewUrl: any = null;
  fileUploadProgress: string = null;
  uploadedFilePath: string = null;


  // สร้าง Model สำหรับ Form
  modelFrm={
    img:File,
    topic:'',
    msg:''
  }
  constructor(private service: ServiceService,
    private uploadService:UploadService,
    private firebase:AngularFirestore) { }

  ngOnInit() {}

  // เพิ่มข้อมูล Content
  add(data: NgForm) {
    console.log(data.value);
    // this.firebase.collection('contents').add(data.value);
  }

  fileProgress(fileInput: any) {
    this.fileData = <File>fileInput.target.files[0];
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
    formData.append('file', this.fileData);
    this.uploadService.upload(formData)
      .subscribe(res => {
        console.log(res);
        this.uploadedFilePath = res.type.toString();
      })
  }


  uploadFile(file) {  
    console.log(file);
    const formData = new FormData();  
    formData.append('file', file.data);  
    // file.inProgress = true;  
    this.uploadService.upload(formData).pipe(  
      map(event => {  
        switch (event.type) {  
          case HttpEventType.UploadProgress:  
            file.progress = Math.round(event.loaded * 100 / event.total);  
            break;  
          case HttpEventType.Response:  
            return event;  
        }  
      }),  
      catchError((error: HttpErrorResponse) => {  
        file.inProgress = false;  
        return of(`${file.data.name} upload failed.`);  
      })).subscribe((event: any) => {  
        if (typeof (event) === 'object') {  
          console.log(event.body);  
        }  
      });  
  }

}
