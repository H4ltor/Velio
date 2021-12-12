import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../../Services/auth.service";

@Component({
  selector: 'velio-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {

  constructor(public authService: AuthService) {}
}
