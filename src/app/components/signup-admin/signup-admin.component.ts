import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { generatedId } from 'src/app/shared/generatedId';

@Component({
  selector: 'app-signup-admin',
  templateUrl: './signup-admin.component.html',
  styleUrls: ['./signup-admin.component.css']
})
export class SignupAdminComponent implements OnInit {

  // id du formulaire 
  signupForm: FormGroup;

  usersTab: any = [];
  messageError: any = "";

  constructor(private formBuilder: FormBuilder,
    private router: Router,
    private userService: UserService) { }

  ngOnInit() {
    this.signupForm = this.formBuilder.group({
      firstName: ["", [Validators.required, Validators.minLength(3)]],
      lastName: ["", [Validators.required, Validators.minLength(5)]],
      email: ["", [Validators.required, Validators.email]],
      pwd: ["", [Validators.required, Validators.minLength(6), Validators.maxLength(12)]],
      cPwd: [""],
      role: ["admin"],
      img: [""]
    })
  }

  signup() {
    this.userService.signup(this.signupForm.value , this.signupForm.value.img).subscribe(
      (data) => {
        console.log("here data after signup", data.message),
        this.messageError = data.message;
      }
    );

  }



}
