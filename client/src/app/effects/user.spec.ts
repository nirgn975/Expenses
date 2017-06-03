import { TestBed, async, inject } from '@angular/core/testing';

import { UserEffects } from './user';
import { UserService } from '../services/user.service';
import { EffectsTestingModule } from '@ngrx/effects/testing';

describe('UserEffects', () => {
  const userServiceStub = {};

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        EffectsTestingModule
      ],
      providers: [
        { provide: UserService, useValue: userServiceStub },
        UserEffects,
      ]
    });
  });

  it('should create', inject([UserEffects], (effects: UserEffects) => {
    expect(effects).toBeTruthy();
  }));

  it('should create', inject([UserEffects], (effects: UserEffects) => {
    expect(effects).toBeTruthy();
  }));
});

// import { TestBed, async, inject } from '@angular/core/testing';
// import { EffectsTestingModule, EffectsRunner } from '@ngrx/effects/testing';
//
// import { UserEffects } from './user';
//
// describe('UserEffects', () => {
//   let runner: EffectsRunner;
//   let userEffects: UserEffects;
//
//   beforeEach(() => TestBed.configureTestingModule({
//     imports: [
//       EffectsTestingModule
//     ],
//     providers: [
//       UserEffects
//     ]
//   }));
//
//   beforeEach(inject(
//     [EffectsRunner, UserEffects], (_runner, _userEffects) => {
//       runner = _runner;
//       userEffects = _userEffects;
//     }
//   ));
//
//   it('should return a LOAD_USER_SUCCESS action after load user', () => {
//     runner.queue({ type: 'LOAD_USER' });
//
//     userEffects.loadUser$.subscribe(result => {
//       expect(result).toEqual({ type: 'LOAD_USER_SUCCESS' });
//     });
//   });
//
// });
