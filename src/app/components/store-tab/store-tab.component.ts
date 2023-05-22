import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-store-tab',
  templateUrl: './store-tab.component.html',
  styleUrls: ['./store-tab.component.css']
})
export class StoreTabComponent implements OnInit {

  storesTab: any = [];

  constructor(private router: Router) { }

  ngOnInit() {
    this.storesTab = JSON.parse(localStorage.getItem("stores") || "[]");
  }

  goToEdit(id) {

    this.router.navigate([`editStore/${id}`]);

  }

}
