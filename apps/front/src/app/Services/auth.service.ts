import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {UserDto, usersResourcePath} from "@velio/velio-model";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  httpClient: any;


  constructor(private http: HttpClient, private router: Router) {}

  signIn(user: UserDto) {
    return this.http.post(`api/users/signIn`, user);
  }

  signUp(user: UserDto) {
    return this.http.post(`api/users/signUp`, user);
  }

  loggedIn() {
    return !!localStorage.getItem('token')
  }

  logoutUser() {
    localStorage.removeItem(`api/users/signUp`)
    //return this.http.get(`api/users/signIn`)
    this.http.delete(`api/users/signUp`);
  }

}
