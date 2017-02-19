import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

import { Transaction } from '../../models/transaction';

@Component({
  selector: 'exp-transaction-detail',
  templateUrl: './transaction-detail.component.html',
  styleUrls: ['./transaction-detail.component.scss']
})
export class TransactionDetailComponent implements OnInit {
  @Input() transaction: Transaction;
  @Output() showDetail = new EventEmitter<Boolean>();

  constructor() { }

  ngOnInit() {
  }
}
