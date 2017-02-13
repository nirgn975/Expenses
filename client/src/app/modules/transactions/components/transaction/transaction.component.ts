import { Component, OnInit, Input } from '@angular/core';
import * as moment from 'moment';

import { Transaction } from '../../models/transaction';

@Component({
  selector: 'exp-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.scss']
})
export class TransactionComponent implements OnInit {
  @Input() transaction: Transaction;
  private transactionDate: string;

  constructor() { }

  ngOnInit() {
    const originalTime = new Date(this.transaction.date);
    const now = new Date();

    // Check if the year, month and day are the same as now
    if (originalTime.getFullYear() === now.getFullYear() && originalTime.getMonth() === now.getMonth() && originalTime.getDate() === now.getDate()) {
      this.transactionDate = moment(this.transaction.date).fromNow();
    } else {
      this.transactionDate = moment(this.transaction.date).calendar();
    }
  }
}
