import 'rxjs/add/operator/switchMap';
import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { TransactionService } from '../services/transaction.service';
import * as transaction from '../actions/transaction';


@Injectable()
export class TransactionEffects {
  constructor(
    private actions$: Actions,
    private transactionService: TransactionService
  ) { }

  @Effect()
  loadTransaction$: Observable<Action>= this.actions$
    .ofType(transaction.ActionTypes.LOAD_TRANSACTION)
    .switchMap(() => this.transactionService.getTransactions())
    .map(transactions => new transaction.LoadTransactionSuccessAction(transactions));

  @Effect()
  loadTransactionsMonth$: Observable<Action>= this.actions$
    .ofType(transaction.ActionTypes.LOAD_TRANSACTION_MONTHS)
    .switchMap(() => this.transactionService.getTransactionsMonth())
    .map(months => new transaction.LoadTransactionMonthsSuccessAction(months));
}
