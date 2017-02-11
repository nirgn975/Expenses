import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TransactionsComponent } from './transactions.component';

const routes: Routes = [
  { path: '', component: TransactionsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class TransactionsRoutingModule { }
