import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {

  userId: any;
  user: any = {};
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userId = localStorage.getItem("connectedUserId");
    this.userService.getUserById(this.userId).subscribe((data) => {

      this.user = data.findedUser;

    })
  }


}
