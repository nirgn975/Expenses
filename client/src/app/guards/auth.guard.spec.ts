/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AuthGuard } from './auth.guard';

describe('AuthGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthGuard]
    });
  });

  it('should create the guard', inject([AuthGuard], (guard: AuthGuard) => {
    expect(guard).toBeTruthy();
  }));

  it('should not allow access without a token', inject([AuthGuard], (guard: AuthGuard) => {
    expect(guard.canActivateChild()).toBeFalsy();
  }));

  it('should allow access when token is in local storage', inject([AuthGuard], (guard: AuthGuard) => {
    // Set token in localStorage
    localStorage.setItem('userToken', '12345');

    expect(guard.canActivateChild()).toBeTruthy();
  }));

  it('should allow access when token is in cookie', inject([AuthGuard], (guard: AuthGuard) => {
    // Set token in a cookie
    document.cookie = 'userToken=12345; expires=' + new Date().toUTCString() + '; path=/';

    expect(guard.canActivateChild()).toBeTruthy();
  }));

  it('should save token from cookie in local storage', () => {
    const token = '12345';

    // Set token in a cookie
    document.cookie = 'userToken=' + token + '; expires=' + new Date().toUTCString() + '; path=/';

    // Get the token from localStorage
    const localStorageToken = localStorage.getItem('userToken');
    expect(localStorageToken).toEqual(token);
  });
});
