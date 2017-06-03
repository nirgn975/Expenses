import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

@Injectable()
export class LoginGuard implements CanActivate {

  constructor() { }

  canActivate() {
    if (localStorage.getItem('userToken')) {
      // The user is logged in
      return false;
    }

    return true;
  }
}
