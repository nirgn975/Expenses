import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';

import * as fromRoot from '../../reducers';
import * as transactionAction from '../../actions/transaction';
import { Transaction } from '../../models/transaction';
import { TransactionMonth } from '../../models/transaction-month';

@Component({
  selector: 'exp-transaction-view',
  templateUrl: './transaction-view.component.html',
  styleUrls: ['./transaction-view.component.scss']
})
export class TransactionViewComponent implements OnInit {
  private transaction$: Observable<Transaction[]>;
  private transactionMonths$: Observable<TransactionMonth[]>;

  constructor(
    private store: Store<fromRoot.State>,
  ) {
    this.transaction$ = store.select(fromRoot.getTransactionState);
    this.transactionMonths$ = store.select(fromRoot.getTransactionMonthState);
  }

  ngOnInit() {
    this.store.dispatch(new transactionAction.LoadTransactionAction());
    this.store.dispatch(new transactionAction.LoadTransactionMonthsAction());
  }

}
