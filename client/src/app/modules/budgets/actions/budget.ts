import { Action } from '@ngrx/store';
import { Budget } from '../models/budget';
import { type } from '../../../util';

export const ActionTypes = {
  LOAD_BUDGETS:                type('[Budget] Load Budgets'),
  LOAD_BUDGETS_SUCCESS:        type('[Budget] Load Budgets Success'),
};

export class LoadBudgetsAction implements Action {
  type = ActionTypes.LOAD_BUDGETS;

  constructor() { }
}

export class LoadBudgetsSuccessAction implements Action {
  type = ActionTypes.LOAD_BUDGETS_SUCCESS;

  constructor(public payload: Budget[]) { }
}

export type Actions
  = LoadBudgetsAction
  | LoadBudgetsSuccessAction;
