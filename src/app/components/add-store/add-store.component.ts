import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { generatedId } from 'src/app/shared/generatedId';

@Component({
  selector: 'app-add-store',
  templateUrl: './add-store.component.html',
  styleUrls: ['./add-store.component.css']
})
export class AddStoreComponent implements OnInit {

  storeForm: FormGroup;
  store: any = {};
  storesTab: any = [];

  constructor() { }

  ngOnInit() {
  }

  addStore() {

    this.storesTab = JSON.parse(localStorage.getItem("stores") || "[]");
    this.store.id = generatedId(this.storesTab);
    this.storesTab.push(this.store);
    localStorage.setItem("stores", JSON.stringify(this.storesTab));

  }

}
