import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MatchService } from 'src/app/services/match.service';

@Component({
  selector: 'app-edit-match',
  templateUrl: './edit-match.component.html',
  styleUrls: ['./edit-match.component.css']
})
export class EditMatchComponent implements OnInit {

  matchForm: FormGroup;

  matchesTab: any = [];
  id: any;
  match: any = {};

  // ActivatedRoute : fait la recherche du paramétre dans le path du navigation
  constructor(private activatedRouter: ActivatedRoute,
    private router: Router,
    private matchService: MatchService) { }

  ngOnInit() {

    // dans get le variable id , tenu du fichier routing 
    this.id = this.activatedRouter.snapshot.paramMap.get("id");

    this.matchService.getMatchById(this.id).subscribe((data) => {

      this.match = data.match
    });


  }
  editMatch() {

    this.matchService.editMatch(this.match).subscribe(

      (data) => { this.match = data }
    );

  }

}
