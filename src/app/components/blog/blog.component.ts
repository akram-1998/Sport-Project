import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  articles:any=[
    {image:"assets/images/img_1.jpg", date:"16/07/1998",tilte:"tilte1",description:"descreption1"},
    {image:"assets/images/img_2.jpg", date:"16/08/2000",tilte:"tilte2",description:"descreption2"},
    {image:"assets/images/img_3.jpg", date:"16/09/2003",tilte:"tilte3",description:"descreption3"}
  ];

  constructor() { }

  ngOnInit() {
  }

}
