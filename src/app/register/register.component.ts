import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  userForm: FormGroup;
  emailSignup: string;
  passwordSignup: string;
  mobNumberPattern = "[\+]\d{2}[\(]\d{2}[\)]\d{4}[\-]\d{4}";  
  constructor(private fb: FormBuilder, private auth: AuthService) { }

  ngOnInit() {
    this.buildForm();
  }

  buildForm(): void {
    this.userForm = new FormGroup({
      firstNameSignup: new FormControl('', [
        Validators.required
      ]),
      lastNameSignup: new FormControl('', [
        Validators.required
      ]),
      emailSignup: new FormControl('', [
        Validators.required,
        Validators.email
      ]),
      telSignup: new FormControl('', [
        Validators.required,
        Validators.minLength(9),
        Validators.maxLength(10)
      ])
    });
  }
  signup(): void {
    // console.log(this.userForm.value.emailSignup, this.userForm.value.passwordSignup);
    // this.auth.emailSignUp(this.userForm.value.emailSignup, this.userForm.value.passwordSignup)
  }

  signInFaceBook(){
    this.auth.facebookLogin();
  }

  signInGoogle(){
    this.auth.googleLogin();
  }

}
