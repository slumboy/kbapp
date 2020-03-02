import { Component, OnInit } from '@angular/core';

import * as AOS from 'aos';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';
import { Course } from '../models/CourseInterface';


@Component({
  selector: 'app-course-all',
  templateUrl: './course-all.component.html',
  styleUrls: ['./course-all.component.css']
})
export class CourseAllComponent implements OnInit {

  course: Observable<any>;
  course_name:string;

  coursePage: Observable<any>;
  cpage_name:string;
  constructor(private db: AngularFirestore) { }

  ngOnInit() {
    AOS.init();

    this.course = this.getAll();
    this.course.subscribe(res=>{
      this.course_name = res[0]['course_name']
    });
    
    this.coursePage = this.getCoursePage();
    this.coursePage.subscribe(res=>{
      this.cpage_name = res[0]['course_name']
    });


  }

  getAll () {
    return this.db.collection('/course_a_jung_wen').valueChanges();
  }

  getCoursePage () {
    return this.db.collection('/course_page').valueChanges();
  }

}
