import { TestBed, async, inject } from '@angular/core/testing';
import { EffectsTestingModule, EffectsRunner } from '@ngrx/effects/testing';

import { TransactionEffects } from './transaction';
import { TransactionService } from '../services/transaction.service';

describe('TransactionEffects', () => {
  const transactionServiceStub = {};
  let runner: EffectsRunner;
  let transactionEffects: TransactionEffects;

  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      EffectsTestingModule,
    ],
    providers: [
      { provide: TransactionService, useValue: transactionServiceStub },
      TransactionEffects,
    ]
  }));

  beforeEach(inject(
    [EffectsRunner, TransactionEffects], (_runner, _transactionEffects) => {
      runner = _runner;
      transactionEffects = _transactionEffects;
    }
  ));

  it('should create', inject([TransactionEffects], (service: TransactionEffects) => {
    expect(service).toBeTruthy();
  }));

  it('should return a LOAD_TRANSACTION_SUCCESS action after load transaction', () => {
    runner.queue({ type: 'LOAD_TRANSACTION' });

    transactionEffects.loadTransaction$.subscribe(result => {
      expect(result).toEqual({ type: 'LOAD_TRANSACTION_SUCCESS' });
    });
  });

  it('should return a LOAD_TRANSACTION_MONTHS_SUCCESS action after load transaction months', () => {
    runner.queue({ type: 'LOAD_TRANSACTION_MONTHS' });

    transactionEffects.loadTransactionsMonth$.subscribe(result => {
      expect(result).toEqual({ type: 'LOAD_TRANSACTION_MONTHS_SUCCESS' });
    });
  });
});
