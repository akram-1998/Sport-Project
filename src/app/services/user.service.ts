import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  userUrl = "http://localhost:3000/users";

  constructor(private httpClient: HttpClient) { }

  // user :{firstName: .... , lastName:.... }

  signup(user: any, file: File) {

    let formData = new FormData();

    formData.append("firstName", user.firstName);
    formData.append("lastName", user.lastName);
    formData.append("email", user.email);
    formData.append("pwd", user.pwd);
    formData.append("role", user.role);
    formData.append("phoneNumber", user.phoneNumber);
    formData.append("img", file);

    return this.httpClient.post<{ message: boolean }>(this.userUrl + "/signup", formData);
  }
  // user :{email: , pwd: }
  login(user) {
    return this.httpClient.post<{ message: string, user: any }>(this.userUrl + "/login", user);
  }

  getUserById(id) {
    return this.httpClient.get<{findedUser :any}>(this.userUrl + `/${id}`);
  }


}
