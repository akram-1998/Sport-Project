import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatchService } from 'src/app/services/match.service';

@Component({
  selector: 'app-match-info',
  templateUrl: './match-info.component.html',
  styleUrls: ['./match-info.component.css']
})
export class MatchInfoComponent implements OnInit {

  displayedResult: any = {};

  matchId: any ;

  constructor(
    private matchService: MatchService,
    private activatedRoute:ActivatedRoute) { }

  ngOnInit() {

    this.matchId = this.activatedRoute.snapshot.paramMap.get("id")
    this.matchService.getMatchById(this.matchId).subscribe(

      (data) => {
        console.log("Here is your Object", data);
        this.displayedResult = data.match;
      }
    );



  }

}
