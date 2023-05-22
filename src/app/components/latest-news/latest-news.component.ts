import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-latest-news',
  templateUrl: './latest-news.component.html',
  styleUrls: ['./latest-news.component.css']
})
export class LatestNewsComponent implements OnInit {

  infoTab:any=[
    {image:"assets/images/img_1.jpg", title:"titre 1",userName:"Melissa",avatar:"assets/images/person_1.jpg",date:"12/04/1999"},
    {image:"assets/images/img_2.jpg", title:"titre 2",userName:"Samira",avatar:"assets/images/person_2.jpg",date:"18/04/2099"},
    {image:"assets/images/img_3.jpg", title:"titre 3",userName:"Amin",avatar:"assets/images/person_3.jpg",date:"12/07/3999"},
    {image:"assets/images/img_2.jpg", title:"titre 4",userName:"khalil",avatar:"assets/images/person_4.jpg",date:"10/04/2011"}
  ];



  constructor() { }

  ngOnInit() {
  }

}
