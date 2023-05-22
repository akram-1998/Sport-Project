import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { TeamService } from 'src/app/services/team.service';

@Component({
  selector: 'app-add-team',
  templateUrl: './add-team.component.html',
  styleUrls: ['./add-team.component.css']
})
export class AddTeamComponent implements OnInit {

  team: any = {};

  matchForm: FormGroup;

  stadiumsTab: any = [];

  constructor(private teamService: TeamService) { }

  ngOnInit() {

    this.stadiumsTab = JSON.parse(localStorage.getItem("stadiums") || "[]");
  }

  addTeam() {

    this.teamService.addTeam(this.team).subscribe(
      (data) => { data.message }
    );
  }

  generatedId(T: any) {

    let max;
    if (T.length == 0) {
      max = 0;
    }

    else {

      max = T[0].id;
      for (var i = 1; i < T.length; i++) {

        if (T[i].Id > max) {
          max = T[i].id;
        }
      }
    }

    return (max);



  }

}
