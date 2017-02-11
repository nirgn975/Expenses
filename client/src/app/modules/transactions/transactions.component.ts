import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';

import * as fromRoot from './reducers';
import * as transactionAction from './actions/transaction';
import { TransactionMonth } from './models/transaction-month';
import { Transaction } from './models/transaction';

@Component({
  selector: 'exp-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transaction.component.scss']
})
export class TransactionsComponent implements OnInit {
  private transactionMonths$: Observable<TransactionMonth[]>;
  private transaction$: Observable<Transaction[]>;
  private date: TransactionMonth;

  constructor(
    private store: Store<fromRoot.State>,
  ) {
    this.transactionMonths$ = store.select(fromRoot.getTransactionMonthState);
    this.transaction$ = store.select(fromRoot.getTransactionState);

    this.date = {
      _id: { month: 0, year: 0 }
    };
  }

  ngOnInit() {
    this.store.dispatch(new transactionAction.LoadTransactionMonthsAction());
  }

  tabChanged(event) {
    const tabDate = event.tab.textLabel.split('-');
    const date = {
      _id: {
        month: tabDate[1],
        year: tabDate[0],
      }
    };

    // Get the new transactions
    this.store.dispatch(new transactionAction.LoadTransactionAction(date));
  }
}
