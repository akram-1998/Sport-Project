import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  logo : string="assets/images/logo.png";
  navHome:string="Home";
  navMatches:string="Add Matches";
  navTeams:string="Add Teams";

  constructor() { }

  ngOnInit() {
  }

}
