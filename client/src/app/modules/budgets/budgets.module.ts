import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';

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
    // StoreModule.provideStore(reducer),
    StoreDevtoolsModule.instrumentOnlyWithExtension(),
    // EffectsModule.run(TransactionEffects),
    BudgetsRoutingModule,
  ],
  providers: [

  ],
})
export class BudgetsModule { }
