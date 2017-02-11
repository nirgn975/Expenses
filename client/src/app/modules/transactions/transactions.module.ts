import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';

import { TransactionsRoutingModule } from './transactions-routing.module';

import { TransactionsComponent } from './transactions.component';
import { TransactionComponent } from './components/transaction/transaction.component';
import { TransactionDetailComponent } from './components/transaction-detail/transaction-detail.component';

import { reducer } from './reducers';

import { TransactionEffects } from './effects/transaction';

import { TransactionService } from './services/transaction.service';

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    MaterialModule.forRoot(),
    StoreModule.provideStore(reducer),
    StoreDevtoolsModule.instrumentOnlyWithExtension(),
    EffectsModule.run(TransactionEffects),
    TransactionsRoutingModule,
  ],
  declarations: [
    TransactionsComponent,
    TransactionComponent,
    TransactionDetailComponent,
  ],
  providers: [
    TransactionService,
  ],
})
export class TransactionsModule { }
