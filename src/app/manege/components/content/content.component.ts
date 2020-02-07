import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../service.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  constructor(private service:ServiceService) { }

  ngOnInit() {
    this.service.getData().subscribe(res=>{
      console.table(res);
    })
  }

}
