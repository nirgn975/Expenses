/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { TransactionEffects } from './transaction';
import { TransactionService } from '../services/transaction.service';
import { EffectsTestingModule } from '@ngrx/effects/testing';

describe('TransactionEffects', () => {
  const transactionServiceStub = {};

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        EffectsTestingModule
      ],
      providers: [
        { provide: TransactionService, useValue: transactionServiceStub },
        TransactionEffects,
      ]
    });
  });

  it('should create the service', inject([TransactionEffects], (service: TransactionEffects) => {
    expect(service).toBeTruthy();
  }));
});
