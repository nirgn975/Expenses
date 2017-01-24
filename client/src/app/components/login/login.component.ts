import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'exp-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  host: {'class': 'login-view'}
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
