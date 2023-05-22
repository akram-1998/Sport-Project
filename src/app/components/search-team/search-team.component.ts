import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-team',
  templateUrl: './search-team.component.html',
  styleUrls: ['./search-team.component.css']
})
export class SearchTeamComponent implements OnInit {

  teamsTab: any = [];
  playersTab: any = [];
  findedPlayers: any = [];
  team: any = {};

  constructor() { }

  ngOnInit() {
    this.teamsTab = JSON.parse(localStorage.getItem("teams") || "[]")
    this.playersTab = JSON.parse(localStorage.getItem("players") || "[]")
  }

  search() {
    this.findedPlayers = [];
    for (let i = 0; i < this.teamsTab.length; i++) {
      if (this.teamsTab[i].teamName == this.team.name) {
        this.team = this.teamsTab[i];
        break;
      }
    }
    for (let j = 0; j < this.playersTab.length; j++) {
      if (this.playersTab[j].teamId == this.team.id) {
        this.findedPlayers.push(this.playersTab[j]);

      }

    }
    console.log("players Founded", this.findedPlayers);
  }

}
