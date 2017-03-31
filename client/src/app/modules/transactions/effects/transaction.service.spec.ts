import { TestBed, inject } from '@angular/core/testing';
import { EffectsTestingModule } from '@ngrx/effects/testing';

import { TransactionService } from './transaction.service';
import { TransactionEffects } from './transaction';

describe('TransactionService', () => {
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

  it('should ...', inject([TransactionService], (service: TransactionService) => {
    expect(service).toBeTruthy();
  }));
});
