import { Component, DoCheck, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';

import * as fromRoot from '../../reducers';
import * as transactionAction from '../../actions/transaction';
import { TransactionMonth } from '../../models/transaction-month';
import { Transaction } from '../../models/transaction';

@Component({
  selector: 'exp-transaction-list',
  templateUrl: './transaction-list.component.html',
  styleUrls: ['./transaction-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TransactionListComponent implements DoCheck {
  public transaction$: Observable<Transaction[]>;
  private date: TransactionMonth;

  constructor(
    private store: Store<fromRoot.State>,
    private route: ActivatedRoute,
  ) {
    this.transaction$ = store.select(fromRoot.getTransactionState);

    this.date = {
      _id: { month: 0, year: 0 }
    };
  }

  ngDoCheck() {
    const newMonth = +this.route.snapshot.params['month'];
    const newYear = +this.route.snapshot.params['year'];

    // Check if the date was changed
    if (this.date._id.year !== newYear || this.date._id.month !== newMonth) {
      // Save the new date
      this.date = {
        _id: { month: newMonth,  year: newYear }
      };

      // Get the new transactions
      this.store.dispatch(new transactionAction.LoadTransactionAction(this.date));
    }
  }
}
