import { TestBed, async, inject } from '@angular/core/testing';

import { AuthGuard } from './auth.guard';

describe('AuthGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ AuthGuard ]
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
    cleanLocalStorageAndCreateCookie('userToken', '12345', 1);

    expect(guard.canActivateChild()).toBeTruthy();
  }));

  it('should save token from cookie in local storage', inject([AuthGuard], (guard: AuthGuard) => {
    const token = '12345';
    cleanLocalStorageAndCreateCookie('userToken', token, 1);

    // Call the guard
    guard.canActivateChild();

    // Get the token from localStorage
    const localStorageToken = localStorage.getItem('userToken');
    expect(localStorageToken).toEqual(token);
  }));
});

function cleanLocalStorageAndCreateCookie(name: string, value: string, expireDays: number) {
  // Remove old userToken from localStorageToken
  localStorage.removeItem('userToken');

  // Set token in a cookie
  let expires = '';
  if (expireDays) {
    const date = new Date();
    date.setTime(date.getTime() + (expireDays * 24 * 60 * 60 * 1000));
    expires = '; expires=' + date.toUTCString();
  }
  document.cookie = name + '=' + value + expires + '; path=/';
}
