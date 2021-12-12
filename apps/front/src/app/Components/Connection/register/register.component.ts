import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../../Services/auth.service";

@Component({
  selector: 'velio-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  formSignUp = new FormGroup({
    firstName: new FormControl('timothee', [Validators.required]),
    lastName: new FormControl('cognard', [Validators.required]),
    email: new FormControl('timothee.cognard@hotmail.fr', [Validators.required, Validators.email]),
    password: new FormControl('totototo', [
      Validators.required,
      Validators.minLength(6),
    ]),
    confirmPassword: new FormControl('totototo', [
      Validators.required,
      Validators.minLength(6),
    ]),
  });

  firebaseError!: string;

  constructor(private auth: AuthService) {
  }

  signUp() {
    const form = this.formSignUp.value;

    this.auth.signUp(form).subscribe((data) => {
    });
  }
}
