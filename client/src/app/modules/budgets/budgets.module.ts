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
import { BudgetComponent } from './components/budget/budget.component';

import { reducer } from './reducers';

import { BudgetEffects } from './effects/budget';

import { BudgetService } from './services/budget.service';

@NgModule({
  declarations: [
    BudgetsComponent,
    BudgetListComponent,
    BudgetComponent,
  ],
  imports: [
    CommonModule,
    HttpModule,
    MaterialModule,
    BudgetsRoutingModule,
    StoreModule.provideStore(reducer),
    StoreDevtoolsModule.instrumentOnlyWithExtension(),
    EffectsModule.run(BudgetEffects),
  ],
  providers: [
    BudgetService,
  ],
})
export class BudgetsModule { }
