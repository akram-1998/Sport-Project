import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatchService } from 'src/app/services/match.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  searchForm: FormGroup;

  matchesTab: any = [];

  matches: any = [];

  match: any = {};

  constructor(private matchService: MatchService) { }

  ngOnInit() {

    this.matchService.getAllMatches().subscribe(
      (data) => {
       
          this.matchesTab = data.matchesArray

      }
    );
  }

  search() {
    //dés que lutilisateur click sur btn search , il efface le tableau matches de nouveau
    this.matches = [];

 

    for (let i = 0; i < this.matchesTab.length; i++) {
      if (this.matchesTab[i].scoreOne == this.match.scoreOne || this.matchesTab[i].scoreTwo == this.match.scoreTwo) {
        this.matches.push(this.matchesTab[i]);
      }

    }
    console.log("result", this.match);
  }

}
