import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TransactionsComponent } from './transactions.component';
import { TransactionListComponent } from './components/transaction-list/transaction-list.component';

const routes: Routes = [
  {
    path: '',
    component: TransactionsComponent,
    children: [
      { path: ':year/:month', component: TransactionListComponent, },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class TransactionsRoutingModule { }
