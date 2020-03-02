import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  course: Observable<any>;
  cArr= [];
  constructor(private db: AngularFirestore) { }
  

  ngOnInit() {
    this.course = this.getAll();
    this.course.subscribe(res=>{
      this.cArr = res;
    });
    console.log(this.cArr);
  }

  getAll () {
    return this.db.collection('/course_recommend').valueChanges();
  }

}
