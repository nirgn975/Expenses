import 'rxjs/add/operator/switchMap';
import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { BudgetService } from '../services/budget.service';
import * as budget from '../actions/budget';

@Injectable()
export class BudgetEffects {
  constructor(
    private actions$: Actions,
    private budgetService: BudgetService
  ) { }

  @Effect()
  loadBudgets$: Observable<Action>= this.actions$
    .ofType(budget.ActionTypes.LOAD_BUDGETS)
    .switchMap(() => this.budgetService.getBudgets())
    .map(budgets => new budget.LoadBudgetsSuccessAction(budgets));
}
