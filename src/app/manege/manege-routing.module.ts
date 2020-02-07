import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ManegeComponent } from './components/manege/manege.component';
import { ContentComponent } from './components/content/content.component';
import { VdoComponent } from './components/vdo/vdo.component';
import { AuthGuard } from '../guards/auth.guard';

const routes: Routes = [
  {
    path: 'dashboard',
    data: { title: 'หน้าจัดการ' },
    component: ManegeComponent,
    canActivate:[AuthGuard],
    children: [
      {
        path: 'content',
        component: ContentComponent
      },
      {
        path: 'vdo',
        component: VdoComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManegeRoutingModule { }
