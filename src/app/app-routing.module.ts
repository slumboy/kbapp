import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { OurteamComponent } from './ourteam/ourteam.component';
import { OurserviceComponent } from './ourservice/ourservice.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './guards/auth.guard';
import { RegisterComponent } from './register/register.component';
import { ManegeModule } from './manege/manege.module';


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
    path: 'login', component: LoginComponent, canActivate: [AuthGuard]
  },
  {
    path: 'register', component: RegisterComponent
  },
  {
    path: 'dashboard',
    loadChildren: './manege/manege.module#ManegeModule',
    data: { preload: false }
  }
];

@NgModule({
  imports: [ManegeModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
