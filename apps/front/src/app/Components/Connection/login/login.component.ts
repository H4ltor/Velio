import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../../Services/auth.service";

@Component({
  selector: 'velio-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  formSignIn = new FormGroup({
    email: new FormControl('timothee.cognard@hotmail.fr', [Validators.required, Validators.email]),
    password: new FormControl('totototo', [
      Validators.required,
      Validators.minLength(6),
    ]),
  });

  firebaseError: string | undefined;

  constructor(private auth: AuthService) {
  }

  signIn() {
    // Get infos from
    const form = this.formSignIn.value;

    // Sign-in
    this.auth.signIn(form).subscribe((data) => {
      console.log(data);
    });
  }

}
