import 'hammerjs';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { MaterialModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

import { reducer } from './reducers';
import { AppRoutingModule } from './app-routing.module';

import { ExpComponent } from './exp.component';
import { LoginComponent } from './components/login/login.component';
import { MainComponent } from './components/main/main.component';
import { TransactionViewComponent } from './components/transaction-view/transaction-view.component';
import { SettingsViewComponent } from './components/settings-view/settings-view.component';
import { BudgetsViewComponent } from './components/budgets-view/budgets-view.component';

import { AuthGuard } from './guards/auth.guard';
import { LoginGuard } from './guards/login.guard';

import { TransactionEffects } from './effects/transaction';

import { TransactionService } from './services/transaction.service';

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
    StoreModule.provideStore(reducer),
    StoreDevtoolsModule.instrumentOnlyWithExtension(),
    EffectsModule.run(TransactionEffects),
  ],
  providers: [
    AuthGuard,
    LoginGuard,
    TransactionService,
  ],
  bootstrap: [ExpComponent]
})
export class AppModule { }
