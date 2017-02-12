import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BudgetsComponent } from './budgets.component';
import { BudgetListComponent } from './components/budget-list/budget-list.component';

const routes: Routes = [
  {
    path: '',
    component: BudgetsComponent,
    children: [
      { path: ':year/:month', component: BudgetListComponent, },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class BudgetsRoutingModule { }
