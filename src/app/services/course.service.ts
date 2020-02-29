import { Injectable, Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFireDatabase } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  
  itemValue = '';
  items: Observable<any[]>;

  constructor(private db:AngularFireDatabase) { }

  getCourseAll(param:string) {
    this.items = this.db.list('course'+param).valueChanges();
    console.log(this.items.subscribe()); ``
  }
}
