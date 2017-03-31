import { TestBed, async, inject } from '@angular/core/testing';

import { LoginGuard } from './login.guard';

describe('LoginGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LoginGuard]
    });
  });

  it('should create the guard', inject([LoginGuard], (guard: LoginGuard) => {
    expect(guard).toBeTruthy();
  }));

  it('should allow access when there is no token', inject([LoginGuard], (guard: LoginGuard) => {
    // Make sure there is no token.
    localStorage.removeItem('userToken');

    expect(guard.canActivate()).toBeTruthy();
  }));

  it('should not allow access when there is a token', inject([LoginGuard], (guard: LoginGuard) => {
    // Set token in localStorage
    localStorage.setItem('userToken', '12345');

    expect(guard.canActivate()).toBeFalsy();
  }));
});
