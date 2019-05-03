import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  myDateObject: Date;

  constructor() { }

  ngOnInit() {
   this.myDateObject = new Date(2000, 8, 10, 12, 12, 12, 12);
  }

}
