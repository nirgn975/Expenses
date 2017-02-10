import 'hammerjs';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '@angular/material';

import { AppRoutingModule } from './app-routing.module';

import { ExpComponent } from './exp.component';
import { LoginComponent } from './components/login/login.component';
import { MainComponent } from './components/main/main.component';
import { SettingsViewComponent } from './components/settings-view/settings-view.component';
import { BudgetsViewComponent } from './components/budgets-view/budgets-view.component';

import { AuthGuard } from './guards/auth.guard';
import { LoginGuard } from './guards/login.guard';



@NgModule({
  declarations: [
    ExpComponent,
    LoginComponent,
    MainComponent,
    SettingsViewComponent,
    BudgetsViewComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MaterialModule.forRoot(),
    AppRoutingModule,
  ],
  providers: [
    AuthGuard,
    LoginGuard,
  ],
  bootstrap: [ExpComponent]
})
export class AppModule { }
