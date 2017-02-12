/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { BudgetsModule } from './budgets.module';

describe('BudgetsModule', () => {
  let budgetsModule;

  beforeEach(() => {
    budgetsModule = new BudgetsModule();
  });

  it('should create an instance', () => {
    expect(budgetsModule).toBeTruthy();
  });
});
