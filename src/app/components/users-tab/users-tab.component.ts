import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users-tab',
  templateUrl: './users-tab.component.html',
  styleUrls: ['./users-tab.component.css']
})
export class UsersTabComponent implements OnInit {

  usersTab: any = [];

  constructor() { }

  ngOnInit() {
    this.usersTab = JSON.parse(localStorage.getItem("usersSport") || "[]");
  }

}
