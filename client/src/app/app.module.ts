import 'hammerjs';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { MaterialModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

import { ExpComponent } from './exp.component';
import { TransactionCardComponent } from './components/transaction-card/transaction-card.component';
import { TransactionDetailsComponent } from './components/transaction-details/transaction-details.component';
import { TransactionViewComponent } from './components/transaction-view/transaction-view.component';
import { LoginComponent } from './components/login/login.component';

@NgModule({
  declarations: [
    ExpComponent,
    TransactionCardComponent,
    TransactionDetailsComponent,
    TransactionViewComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot(),
    FlexLayoutModule.forRoot(),
  ],
  providers: [],
  bootstrap: [ExpComponent]
})
export class AppModule { }
