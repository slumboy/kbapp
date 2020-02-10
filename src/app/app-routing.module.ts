import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { OurteamComponent } from './ourteam/ourteam.component';
import { OurserviceComponent } from './ourservice/ourservice.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './guards/auth.guard';
import { RegisterComponent } from './register/register.component';
import { ManegeModule } from './manege/manege.module';
import { CourseComponent } from './course/course.component';
import { CourseAllComponent } from './course-all/course-all.component';


const routes: Routes = [
  {
    path: '', component: HomeComponent,

  }, {
    path: 'our', component: OurteamComponent
  },
  {
    path: 'service', component: OurserviceComponent
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'register', component: RegisterComponent
  },
  {
    path: 'course', component: CourseComponent
  },
  {
    path: 'course-all', component: CourseAllComponent
  },
  {
    path: 'dashboard',
    loadChildren: './manege/manege.module#ManegeModule',
    data: { preload: false }
  },
  {path: '**', component: HomeComponent}
];

@NgModule({
  imports: [ManegeModule, RouterModule.forRoot(routes,{ enableTracing: false })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
