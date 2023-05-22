import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stadiums-tab',
  templateUrl: './stadiums-tab.component.html',
  styleUrls: ['./stadiums-tab.component.css']
})
export class StadiumsTabComponent implements OnInit {

  stadiumsTab: any = [];

  constructor() { }

  ngOnInit() {
    this.stadiumsTab = JSON.parse(localStorage.getItem("stadiums") || "[]");
  }

}
