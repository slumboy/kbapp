import { BrowserModule } from '@angular/platform-browser';
import { HttpClient,HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { NgbModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { SocialLoginModule, AuthServiceConfig, FacebookLoginProvider } from 'angularx-social-login';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// Firebase
// import { AngularFireModule } from 'angularfire2';
// import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabase, AngularFireObject } from 'angularfire2/database';

// Fire base 2
import { environment } from "src/environments/environment";
import { AngularFireModule } from "@angular/fire";
import { AngularFirestoreModule } from "@angular/fire/firestore";


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { NavbarappComponent } from './navbarapp/navbarapp.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ContentComponent } from './content/content.component';
import { FooterComponent } from './footer/footer.component';
import { OurteamComponent } from './ourteam/ourteam.component';
import { OurserviceComponent } from './ourservice/ourservice.component';
import { LoginComponent } from './login/login.component';
import { AuthService } from './services/auth.service';
import { AuthGuard } from './guards/auth.guard';
import { RegisterComponent } from './register/register.component';
import { ManegeModule } from './manege/manege.module';
import { CKEditorModule } from 'ckeditor4-angular';
import { CourseComponent } from './course/course.component';
import { CourseAllComponent } from './course-all/course-all.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    NavbarappComponent,
    WelcomeComponent,
    ContentComponent,
    FooterComponent,
    OurteamComponent,
    OurserviceComponent,
    LoginComponent,
    RegisterComponent,
    CourseComponent,
    CourseAllComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule, ReactiveFormsModule,
    NgbModule,
    NgbAlertModule,
    AngularFontAwesomeModule,
    SocialLoginModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    ManegeModule,
    CKEditorModule,
    AngularFirestoreModule
  ],
  providers: [
    AuthService,
    AngularFireDatabase,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
