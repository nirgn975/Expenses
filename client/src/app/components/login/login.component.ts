import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'exp-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  @HostBinding('class') class = 'login-view';
}
