import { Component, OnInit, HostBinding } from '@angular/core';

@Component({
  selector: 'exp-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  @HostBinding('class') class = 'login-view';

  constructor() { }

  ngOnInit() {
  }

}
