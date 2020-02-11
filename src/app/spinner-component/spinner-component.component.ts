import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-spinner-component',
  templateUrl: './spinner-component.component.html',
  styleUrls: ['./spinner-component.component.css']
})
export class SpinnerComponentComponent implements OnInit {

  @Input() message = '';
  
  constructor() { }

  ngOnInit() {
  }

}
