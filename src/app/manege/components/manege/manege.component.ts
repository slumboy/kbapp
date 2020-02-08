import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-manege',
  templateUrl: './manege.component.html',
  styleUrls: ['./manege.component.css']
})
export class ManegeComponent implements OnInit {

  constructor(private auth:AuthService) { }

  ngOnInit() {
  }

}
