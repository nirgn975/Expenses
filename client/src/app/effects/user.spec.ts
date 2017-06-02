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

  it('should create', inject([UserEffects], (service: UserEffects) => {
    expect(service).toBeTruthy();
  }));
});
