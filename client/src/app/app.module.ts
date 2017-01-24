import 'hammerjs';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { MaterialModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

import { ExpComponent } from './exp.component';
import { AppRoutingModule } from './app-routing.module';

import { LoginComponent } from './components/login/login.component';
import { MainComponent } from './components/main/main.component';
import { TransactionViewComponent } from './components/transaction-view/transaction-view.component';
import { SettingsViewComponent } from './components/settings-view/settings-view.component';
import { BudgetsViewComponent } from './components/budgets-view/budgets-view.component';

@NgModule({
  declarations: [
    ExpComponent,
    LoginComponent,
    MainComponent,
    TransactionViewComponent,
    SettingsViewComponent,
    BudgetsViewComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot(),
    FlexLayoutModule.forRoot(),
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [ExpComponent]
})
export class AppModule { }
