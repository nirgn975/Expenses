import { Injectable } from '@angular/core';
import { CanActivateChild } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivateChild {

  constructor() { }

  canActivateChild() {
    return true;
  }

}
