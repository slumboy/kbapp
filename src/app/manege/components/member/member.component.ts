import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/auth";
import { AngularFireDatabase } from "@angular/fire/database";
import { User } from 'firebase';
import * as admin from 'firebase-admin';
@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.css']
})
export class MemberComponent implements OnInit {
  user: User;
  constructor(
    public afAuth: AngularFireAuth,
    private af: AngularFireDatabase
  ) { }

  ngOnInit() {
    var serviceAccount = require("C:/Users/User/Downloads/serviceAccountKey.json");
   console.log(serviceAccount.project_id);
  }
}
