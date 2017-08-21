import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { AgmCoreModule } from 'angular2-google-maps/core';

import { reducers } from './reducers';
import { TransactionsRoutingModule } from './transactions-routing.module';

import { TransactionsComponent } from './transactions.component';
import { TransactionListComponent } from './components/transaction-list/transaction-list.component';
import { TransactionComponent } from './components/transaction/transaction.component';
import { TransactionDetailComponent } from './components/transaction-detail/transaction-detail.component';

import { TransactionEffects } from './effects/transaction';

import { TransactionService } from './services/transaction.service';

import { environment } from '../../../environments/environment';

@NgModule({
  declarations: [
    TransactionsComponent,
    TransactionListComponent,
    TransactionComponent,
    TransactionDetailComponent,
  ],
  imports: [
    CommonModule,
    HttpModule,
    TransactionsRoutingModule,
    MaterialModule,
    StoreModule.forRoot(reducers),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    EffectsModule.forRoot([
      TransactionEffects,
    ]),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCRnQ6EoWwKKgxj2lF6OZgKZSNEd5ypYcw'
    })
  ],
  providers: [
    TransactionService,
  ],
})
export class TransactionsModule { }
