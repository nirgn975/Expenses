import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';

import * as fromRoot from './reducers';
import * as transactionAction from './actions/transaction';
import { TransactionMonth } from './models/transaction-month';

@Component({
  selector: 'exp-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.scss']
})
export class TransactionsComponent implements OnInit {
  private transactionMonths$: Observable<TransactionMonth[]>;

  constructor(
    private store: Store<fromRoot.State>,
  ) {
    this.transactionMonths$ = store.select(fromRoot.getTransactionMonthState);
  }

  ngOnInit() {
    this.store.dispatch(new transactionAction.LoadTransactionMonthsAction());
  }
}
