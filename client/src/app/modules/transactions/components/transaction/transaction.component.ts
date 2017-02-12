import { Component, Input } from '@angular/core';

import { Transaction } from '../../models/transaction';

@Component({
  selector: 'exp-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.scss']
})
export class TransactionComponent {
  @Input() transaction: Transaction;

  constructor() { }

}
