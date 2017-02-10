/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { TransactionsModule } from './transactions.module';

describe('TransactionsModule', () => {
  let transactionsModule;

  beforeEach(() => {
    transactionsModule = new TransactionsModule();
  });

  it('should create an instance', () => {
    expect(transactionsModule).toBeTruthy();
  })
});
