import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TeamService } from 'src/app/services/team.service';

@Component({
  selector: 'app-teams-table',
  templateUrl: './teams-table.component.html',
  styleUrls: ['./teams-table.component.css']
})
export class TeamsTableComponent implements OnInit {

  teams: any = [];
  stadiumsTab: any = [];
  findedStad: any = {};

  constructor(private router: Router,
    private teamService: TeamService) {

  }

  ngOnInit() {

    this.teamService.getAllTeams().subscribe((data) => {

      this.teams = data.teamsTab;

    });

  }

  display(id) {

    this.router.navigate([`teamInfo/${id}`]);

  }

  deleteTeam(id) {

    this.teamService.deleteTeamById(id).subscribe((data) => {

      data.isDeleted;

      this.teamService.getAllTeams().subscribe((data)=>{

        this.teams=data.teamsTab;
      });

    });
  }

  search(x) {

    // for (let i = 0; i < this.stadiumsTab.length; i++) {
    //   if (this.stadiumsTab[i].id == id) {
    //     this.findedStad = this.stadiumsTab[i];
    //     break;
    //   }

    // }
    // return this.findedStad;

    return this.stadiumsTab.find((elt) => { return elt.id == x });
  }

}
