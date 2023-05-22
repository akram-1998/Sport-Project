import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { generatedId } from 'src/app/shared/generatedId';

@Component({
  selector: 'app-add-stadium',
  templateUrl: './add-stadium.component.html',
  styleUrls: ['./add-stadium.component.css']
})
export class AddStadiumComponent implements OnInit {

  stadiumForm: FormGroup;

  stadium: any = {};

  constructor() { }

  ngOnInit() {
  }

  addStadium() {

    let stadiumsTab = JSON.parse(localStorage.getItem("stadiums") || "[]");
    this.stadium.id = generatedId(stadiumsTab) ;
    stadiumsTab.push(this.stadium);
    localStorage.setItem("stadiums", JSON.stringify(stadiumsTab));
  }

}
