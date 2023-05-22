import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  obj:any={teamOne:"RMA", teamTwo:"FCB",scoreOne:4,scoreTwo:0};

  constructor() { }

  ngOnInit() {
  }

}
