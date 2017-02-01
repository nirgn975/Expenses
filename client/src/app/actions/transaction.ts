import { Action } from '@ngrx/store';
import {  Transaction } from '../models/transaction';
import {  TransactionMonth } from '../models/transaction-month';
import { type } from '../util';


export const ActionTypes = {
  LOAD_TRANSACTION:                type('[Transaction] Load Transaction'),
  LOAD_TRANSACTION_SUCCESS:        type('[Transaction] Load Transactions Success'),
  LOAD_TRANSACTION_MONTHS:         type('[Transaction] Load All Transaction Months'),
  LOAD_TRANSACTION_MONTHS_SUCCESS: type('[Transaction] Load All Transactions Months Success'),
};

export class LoadTransactionAction implements Action {
  type = ActionTypes.LOAD_TRANSACTION;

  constructor() { }
}

export class LoadTransactionSuccessAction implements Action {
  type = ActionTypes.LOAD_TRANSACTION_SUCCESS;

  constructor(public payload: Transaction[]) { }
}

export class LoadTransactionMonthsAction implements Action {
  type = ActionTypes.LOAD_TRANSACTION_MONTHS;

  constructor() { }
}

export class LoadTransactionMonthsSuccessAction implements Action {
  type = ActionTypes.LOAD_TRANSACTION_MONTHS_SUCCESS;

  constructor(public payload: TransactionMonth[]) { }
}

export type Actions
  = LoadTransactionAction
  | LoadTransactionSuccessAction
  | LoadTransactionMonthsAction
  | LoadTransactionMonthsSuccessAction;
