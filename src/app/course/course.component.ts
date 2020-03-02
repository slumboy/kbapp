import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Course, LvUnit } from '../models/CourseInterface';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  unitDetail: Array<any> = [];
  itemValue: Course;
  unit: LvUnit;
  items: Observable<any[]>;

  constructor(private actRouter: ActivatedRoute, private db: AngularFirestore) { }

  ngOnInit() {
    console.log(this.actRouter.snapshot.params);

    if (this.actRouter.snapshot.params.flag === 'A') {
      console.log('A');
      this.getCourse(this.actRouter.snapshot.params.id);
    } else if (this.actRouter.snapshot.params.flag === 'B') {
      console.log('B');
      this.getCoursePage(this.actRouter.snapshot.params.id);
    }
  }


  getCourse(document: string) {
    let doc = this.db.collection('/course_a_jung_wen').doc(document);
    doc.valueChanges()
      .subscribe((res: Course) => {
        this.itemValue = res;
        this.Unit(this.itemValue.lv_unit);
      });
  }

  getCoursePage(document: string) {
    let doc = this.db.collection('/course_page').doc(document);
    doc.valueChanges()
      .subscribe((res: Course) => {
        console.log(res);
        this.itemValue = res;
        this.Unit(this.itemValue.unit);
      });
  }

  Unit(obj: LvUnit) {
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        this.unitDetail.push(obj[key]);
        console.log(this.unitDetail);
      }
    }
  }


}
