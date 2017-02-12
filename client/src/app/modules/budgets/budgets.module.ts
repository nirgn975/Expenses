import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';

import { BudgetsRoutingModule } from './budgets-routing.module';

import { BudgetsComponent } from './budgets.component';
import { BudgetListComponent } from './components/budget-list/budget-list.component';

@NgModule({
  declarations: [
    BudgetsComponent,
    BudgetListComponent,
  ],
  imports: [
    CommonModule,
    HttpModule,
    MaterialModule.forRoot(),
    BudgetsRoutingModule,
  ],
  providers: [

  ],
})
export class BudgetsModule { }
