import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManegeRoutingModule } from './manege-routing.module';
import { ContentComponent } from './components/content/content.component';
import { ManegeComponent } from './components/manege/manege.component';
import { CKEditorModule } from 'ckeditor4-angular';
import { ServiceService } from './service.service';

@NgModule({
  declarations: [
    ContentComponent,
    ManegeComponent
  ],
  imports: [
    CommonModule,
    ManegeRoutingModule,
    CKEditorModule
  ],
  providers:[
    ServiceService
  ]
})
export class ManegeModule { }
