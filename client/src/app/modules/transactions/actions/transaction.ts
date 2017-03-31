import { Action } from '@ngrx/store';
import { Transaction } from '../models/transaction';
import { TransactionMonth } from '../models/transaction-month';

export const LOAD_TRANSACTION =  '[Transaction] Load Transaction';
export const LOAD_TRANSACTION_SUCCESS =  '[Transaction] Load Transactions Success';
export const LOAD_TRANSACTION_MONTHS = '[Transaction] Load All Transaction Months';
export const LOAD_TRANSACTION_MONTHS_SUCCESS = '[Transaction] Load All Transactions Months Success';

export class LoadTransactionAction implements Action {
  readonly type = LOAD_TRANSACTION;

  constructor(public payload: TransactionMonth) { }
}

export class LoadTransactionSuccessAction implements Action {
  readonly type = LOAD_TRANSACTION_SUCCESS;

  constructor(public payload: Transaction[]) { }
}

export class LoadTransactionMonthsAction implements Action {
  readonly type = LOAD_TRANSACTION_MONTHS;

  constructor() { }
}

export class LoadTransactionMonthsSuccessAction implements Action {
  readonly type = LOAD_TRANSACTION_MONTHS_SUCCESS;

  constructor(public payload: TransactionMonth[]) { }
}

export type Actions
  = LoadTransactionAction
  | LoadTransactionSuccessAction
  | LoadTransactionMonthsAction
  | LoadTransactionMonthsSuccessAction;
