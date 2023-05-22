import { Component, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { EventEmitter } from 'protractor';
import { MatchService } from 'src/app/services/match.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  matchForm: FormGroup;

  comment: any = {};

  @Output() updatedMatches: EventEmitter ;
  @Input() matchResult: any;


  constructor(private matchService: MatchService) { }

  ngOnInit() {

  }

  scoreColor(s1, s2) {

    if (s1 > s2) {
      return ("green");

    } else if (s1 < s2) {
      return ("orange");
    } else {
      return ("blue");
    }

  }

  addComment() {

    let userId = localStorage.getItem("connectedUserId");

    let matchId = this.matchResult._id;

    this.comment.userId = userId;

    this.comment.matchId = matchId;

    this.matchService.addComment(this.comment).subscribe((data) => {

      this.matchService.getAllMatchesWithComments().subscribe((data) => {

       });
    });

  }


}
