import { Injectable } from '@angular/core';
import { CanActivateChild } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivateChild {

  constructor() { }

  canActivateChild() {
    if (localStorage.getItem('userToken')) {
      // The user already authenticated.
      return true;
    }

    const userToken = this.getCookie('userToken');
    if (userToken) {
      // The user authenticated for the first time.
      this.setCookie('userToken', '', -1);
      localStorage.setItem('userToken', userToken);
      return true;
    }

    return false;
  }

  private getCookie(name: string) {
    let cookieValue = '';

    const cookieArray = document.cookie.split(';');
    cookieArray.forEach(function(token) {
      const element = token.split('=');
      if (element[0].trim() === name) {
        cookieValue = element[1];
      }
    });

    return cookieValue;
  }

  private setCookie(name: string, value: string, expireDays: number) {
    let expires = '';
    if (expireDays) {
      const date = new Date();
      date.setTime(date.getTime() + (expireDays * 24 * 60 * 60 * 1000));
      expires = '; expires=' + date.toUTCString();
    }
    document.cookie = name + '=' + value + expires + '; path=/';
  }
}
