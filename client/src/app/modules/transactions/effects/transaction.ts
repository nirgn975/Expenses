import 'rxjs/add/operator/switchMap';
import { Injectable } from '@angular/core';
import { Effect, Actions, toPayload } from '@ngrx/effects';
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
    .ofType(transaction.LOAD_TRANSACTION)
    .map(toPayload)
    .switchMap(time => this.transactionService.getTransactionsByDate(time)
      .map(transactions => new transaction.LoadTransactionSuccessAction(transactions))
      // .catch(error => Observable.of(getPostsFail(error)))
    );

  @Effect()
  loadTransactionsMonth$: Observable<Action>= this.actions$
    .ofType(transaction.LOAD_TRANSACTION_MONTHS)
    .switchMap(_ => this.transactionService.getTransactionsMonth()
      .map(months => new transaction.LoadTransactionMonthsSuccessAction(months))
      // .catch(error => Observable.of(getPostsFail(error)))
    );
}
