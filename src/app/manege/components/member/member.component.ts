import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../service.service';

import { auth } from 'firebase/app';
import { AngularFireAuth } from "@angular/fire/auth";
import { User } from 'firebase';
import { AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.css']
})
export class MemberComponent implements OnInit {
  user: User;
  constructor(
    public afAuth: AngularFireAuth,
    private a: AngularFireDatabase
  ) { }

  ngOnInit() {
    var admin = require("firebase-admin");

    var serviceAccount = require("path/to/serviceAccountKey.json");

    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
      storageBucket: "<BUCKET_NAME>.appspot.com"
    });

    var bucket = admin.storage().bucket();
  }
}
