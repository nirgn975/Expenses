import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';

@Injectable()
export class LoginGuard implements CanActivate {

  constructor(
    private router: Router,
  ) { }

  canActivate() {
    if (localStorage.getItem('userToken')) {
      // The user is logged in
      this.router.navigate(['/home']);
      return false;
    }

    return true;
  }
}
