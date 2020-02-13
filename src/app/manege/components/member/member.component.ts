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
    
  }
}
