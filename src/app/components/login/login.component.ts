import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  title: any = "login";
  actualDate: any = new Date();
  usersTab: any = [];
  connectedUser: any = {};
  errorMesg = "";
  constructor(private formbuilder: FormBuilder,
    private router: Router,
    private userService: UserService) { }

  ngOnInit() {

    this.loginForm = this.formbuilder.group({

      email: ["", [Validators.required, Validators.email]],
      pwd: ["", [Validators.required]],

    })
  }

  login() {

    this.userService.login(this.loginForm.value).subscribe((data) => {
      console.log("Here is data ater Login", data.message, data.user);
      if (data.message == "2") {
        localStorage.setItem("connectedUserId", data.user.id);
        localStorage.setItem("role", data.user.role);
        console.log("here role", data.user);
        (data.user.role == "admin") ?
          this.router.navigate(["admin"]) :
          this.router.navigate(["profile"]);
      } else {
        this.errorMesg = "please check email&pwd";
      }


    });



    // this.router.navigate(["profile"]);

    // this.usersTab = JSON.parse(localStorage.getItem("usersSport") || "[]");
    // for (let i = 0; i < this.usersTab.length; i++) {
    //   if (this.usersTab[i].email == this.loginForm.value.email && this.usersTab[i].pwd == this.loginForm.value.pwd) {

    //     this.connectedUser = this.usersTab[i];
    //     localStorage.setItem("connectedUserId", this.connectedUser.id);
    //     this.router.navigate([""]);

    //     break;
    //   }
    //   else {
    //     this.errorMesg = "Your are not a member yet";

    //   }

    // }

  }

}
