import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';

import * as fromRoot from './reducers';
import * as transactionAction from './actions/transaction';
import { TransactionMonth } from './models/transaction-month';

@Component({
  selector: 'exp-transactions',
  template: `
    <nav md-tab-nav-bar>
      <a md-tab-link
         *ngFor="let currentTime of transactionMonths$ | async"
         [routerLink]="['/home/transactions', currentTime._id.year, currentTime._id.month]"
         routerLinkActive #rla="routerLinkActive"
         [active]="rla.isActive">
        {{currentTime._id.year}}-{{currentTime._id.month}}
      </a>
    </nav>
    
    <router-outlet></router-outlet>
    
    <button md-fab>
      <md-icon class="md-24">add</md-icon>
    </button>
  `,
  styles: [`
    /deep/ .md-tab-header-pagination {
      box-shadow: none;
    }
    
    /deep/ md-tab-header.md-tab-header {
      border-bottom: none;
    }
    
    button {
      position: absolute;
      bottom: 0;
      right: 0;
      margin: 10px;
    }
  `]
})
export class TransactionsComponent implements OnInit {
  private transactionMonths$: Observable<TransactionMonth[]>;

  constructor(
    private store: Store<fromRoot.State>,
    private router: Router,
  ) {
    this.transactionMonths$ = this.store.select(fromRoot.getTransactionMonthState);

  }

  ngOnInit() {
    // Get months
    this.store.dispatch(new transactionAction.LoadTransactionMonthsAction());

    // Move the tab to the last year and month
    this.store.select(fromRoot.getTransactionMonthState).subscribe(
      res => {
        const lastYear = res[res.length - 1]._id.year;
        const lastMonth = res[res.length - 1]._id.month;
        this.router.navigateByUrl(`/home/transactions/${lastYear}/${lastMonth}`);
      }
    );
  }
}
