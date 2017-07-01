import { Component, Input, Output, EventEmitter, OnInit, ChangeDetectionStrategy } from '@angular/core';
import * as moment from 'moment';

import { Transaction } from '../../models/transaction';

@Component({
  selector: 'exp-transaction-detail',
  templateUrl: './transaction-detail.component.html',
  styleUrls: ['./transaction-detail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TransactionDetailComponent implements OnInit {
  @Input() transaction: Transaction;
  @Output() showDetail = new EventEmitter<Boolean>();
  public transactionDate: string;

  constructor() { }

  ngOnInit() {
    const originalTime = new Date(this.transaction.date);
    const now = new Date();

    // Check if the year, month and day are the same as now
    if (originalTime.getFullYear() === now.getFullYear() &&
        originalTime.getMonth() === now.getMonth() &&
        originalTime.getDate() === now.getDate()) {
      this.transactionDate = moment(this.transaction.date).fromNow();
    } else {
      this.transactionDate = moment(this.transaction.date).calendar();
    }
  }
}
