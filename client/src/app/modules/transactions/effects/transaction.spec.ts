import { TestBed, async, inject } from '@angular/core/testing';
import { EffectsTestingModule } from '@ngrx/effects/testing';

import { TransactionEffects } from './transaction';
import { TransactionService } from '../services/transaction.service';

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

  it('should create', inject([TransactionEffects], (service: TransactionEffects) => {
    expect(service).toBeTruthy();
  }));
});
