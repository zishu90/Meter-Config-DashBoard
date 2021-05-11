import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  myDate = new Date();
  weekDay = '';
  constructor() { 
   
  }
  ngOnInit(): void {

    const daysOfWeek = ['Sunday', 'Monday','Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    this.weekDay = daysOfWeek[new Date().getDay()];
  }

}
