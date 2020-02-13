import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  // สร้าง Model สำหรับ Form
  modelFrm = {
    topic: '',
    price: '',
    detail: 'xx.png'
  }

  constructor() { }

  ngOnInit() {
  }

}
