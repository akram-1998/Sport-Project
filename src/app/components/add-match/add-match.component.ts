import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatchService } from 'src/app/services/match.service';
import { generatedId } from 'src/app/shared/generatedId';

@Component({
  selector: 'app-add-match',
  templateUrl: './add-match.component.html',
  styleUrls: ['./add-match.component.css']
})
export class AddMatchComponent implements OnInit {

  matchForm: FormGroup;

  match: any = {};

  message :string ="";

  constructor(private matchService: MatchService) { }

  ngOnInit() {
  }

  addMatch() {

    this.matchService.addMatch(this.match).subscribe(
      (data)=>{this.message=data.message}
    );

  }



}
