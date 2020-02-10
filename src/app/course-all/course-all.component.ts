import { Component, OnInit } from '@angular/core';

import * as AOS from 'aos';

@Component({
  selector: 'app-course-all',
  templateUrl: './course-all.component.html',
  styleUrls: ['./course-all.component.css']
})
export class CourseAllComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    AOS.init();
  }

}
