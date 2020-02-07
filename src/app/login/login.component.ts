import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userForm: FormGroup;
  emailSignup: string;
  passwordSignup: string;

  constructor(private fb: FormBuilder, private auth: AuthService) { }

  ngOnInit() {
    this.buildForm();
  }

  buildForm(): void {
    this.userForm = new FormGroup({
      emailSignup: new FormControl('', [
        Validators.required,
        Validators.email
      ]),
      passwordSignup: new FormControl('', [
        Validators.pattern('^ (?=.* [0–9])(?=.* [a - zA - Z])([a - zA - Z0–9] +)$'),
        Validators.minLength(6),
        Validators.maxLength(25)
      ])
    });
  }
  signin(): void {
    this.auth.emailLogin(this.userForm.value.emailSignup, this.userForm.value.passwordSignup);
  }

  signInFaceBook(){
    this.auth.facebookLogin();
  }

  signOut(){
    this.auth.signOut();
  }

}
