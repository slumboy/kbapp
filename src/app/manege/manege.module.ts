import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManegeRoutingModule } from './manege-routing.module';
import { ContentComponent } from './components/content/content.component';
import { ManegeComponent } from './components/manege/manege.component';
import { CKEditorModule } from 'ckeditor4-angular';
import { ServiceService } from './service.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { VdoComponent } from './components/vdo/vdo.component';
import { NavComponent } from './components/nav/nav.component';
import { HttpClientModule } from '@angular/common/http';
import { CourseComponent } from './components/course/course.component';
import { MemberComponent } from './components/member/member.component'
import * as admin from 'firebase-admin';
@NgModule({
  declarations: [
    ContentComponent,
    ManegeComponent,
    VdoComponent,
    NavComponent,
    CourseComponent,
    MemberComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    ManegeRoutingModule,
    CKEditorModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers:[
    ServiceService
  ]
})
export class ManegeModule { }
