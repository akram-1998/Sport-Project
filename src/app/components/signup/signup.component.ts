import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  // id du formulaire 
  signupForm: FormGroup;

  usersTab: any = [];
  messageError: any = "";
  imagePreview: any;

  constructor(private formBuilder: FormBuilder,
    private router: Router,
    private userService: UserService) { }

  ngOnInit() {
    this.signupForm = this.formBuilder.group({
      firstName: ["", [Validators.required, Validators.minLength(3)]],
      lastName: ["", [Validators.required, Validators.minLength(5)]],
      email: ["", [Validators.required, Validators.email]],
      phoneNumber: ["", [Validators.minLength(8), Validators.maxLength(8)]],
      pwd: ["", [Validators.required, Validators.minLength(6), Validators.maxLength(12)]],
      cPwd: [""],
      role: ["user"],
      img: [""]
    })
  }

  signup() {

    this.userService.signup(this.signupForm.value, this.signupForm.value.img).subscribe((data) => {
      if (data.message) {
        this.router.navigate(["signin"]);
      } else {
        this.messageError = "Email Exist";
      }

    });
  }

  onImageSelected(event: Event) {
    const file = (event.target as HTMLInputElement).files[0];
    this.signupForm.patchValue({ img: file });
    this.signupForm.updateValueAndValidity();
    const reader = new FileReader();
    reader.onload = () => {
      this.imagePreview = reader.result as string
    };
    reader.readAsDataURL(file);
  }



}


