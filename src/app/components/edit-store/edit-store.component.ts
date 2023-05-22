import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-store',
  templateUrl: './edit-store.component.html',
  styleUrls: ['./edit-store.component.css']
})
export class EditStoreComponent implements OnInit {

  editStore: FormGroup;

  store: any = {};
  storesTab: any = [];
  id: any;

  constructor(private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {

    this.storesTab = JSON.parse(localStorage.getItem("stores") || "[]");
    this.id = this.activatedRoute.snapshot.paramMap.get("id");
    for (let i = 0; i < this.storesTab.length; i++) {
      if (this.storesTab[i].id == this.id) {
        this.store = this.storesTab[i];
        break;
      }

    }

    this.editStore = this.formBuilder.group({
      name: [""],
      adress: [""],
    });

  }

  edit() {
    for (let i = 0; i < this.storesTab.length; i++) {
      if (this.storesTab[i].id == this.id) {
        this.storesTab[i] = this.store;
        break;

      }
    }

    localStorage.setItem("stores", JSON.stringify(this.storesTab));
    this.router.navigate(["dashboard"]);
  }
}