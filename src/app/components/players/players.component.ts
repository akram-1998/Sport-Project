import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit {

  playersTab: any = [
    { path: "assets/images/img_1.jpg", name: "CR7", number: "7" ,position:"Forward"},
    { path: "assets/images/img_2.jpg", name: "Phelip Lham", number: "6",position:"RightWing" },
    { path: "assets/images/img_3.jpg", name: "Messi", number: "10" ,position:"MIDFilder"}
  ];

  constructor() { }

  ngOnInit() {
  }

}
