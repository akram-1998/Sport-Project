import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReclamationService } from 'src/app/services/reclamation.service';

@Component({
  selector: 'app-reclamation',
  templateUrl: './reclamation.component.html',
  styleUrls: ['./reclamation.component.css']
})
export class ReclamationComponent implements OnInit {

  reclamationForm: FormGroup;
  id: any;
  constructor(private formBuilder: FormBuilder,
    private reclamationService: ReclamationService) { }

  ngOnInit() {
    this.id = localStorage.getItem("connectedUserId");
    this.reclamationForm = this.formBuilder.group({

      subject: ["", [Validators.required]],
      description: ["", [Validators.required]],

    });
  }

  send() {

    this.reclamationForm.value.userId = this.id;
    console.log("here id", this.id)
    this.reclamationService.addRec(this.reclamationForm.value).subscribe((data) => {
      console.log("here object to base", this.reclamationForm.value)
      data.message;

      console.log("here", data);
    });

  }

}
