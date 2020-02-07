import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ManegeComponent } from './components/manege/manege.component';
import { ContentComponent } from './components/content/content.component';

const routes: Routes = [
  {
    path: 'dashboard',
    data: { title: 'หน้าจัดการ' },
    component: ManegeComponent
  },
  {
    path: 'dashboard/content',
    data: { title: 'หน้าจัดการ' },
    component: ContentComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManegeRoutingModule { }
