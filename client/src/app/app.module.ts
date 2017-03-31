import 'hammerjs';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '@angular/material';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';

import { AppRoutingModule } from './app-routing.module';

import { reducer } from './reducers';

import { ExpComponent } from './exp.component';
import { LoginComponent } from './components/login/login.component';
import { MainComponent } from './components/main/main.component';
import { SettingsViewComponent } from './components/settings-view/settings-view.component';

import { AuthGuard } from './guards/auth.guard';
import { LoginGuard } from './guards/login.guard';

import { UserEffects } from './effects/user';

import { UserService } from './services/user.service';
import { OverviewsComponent } from './modules/overviews/overviews.component';
import { TransactionsComponent } from './modules/transactions/transactions.component';

@NgModule({
  declarations: [
    ExpComponent,
    LoginComponent,
    MainComponent,
    SettingsViewComponent,
    OverviewsComponent,
    TransactionsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    MaterialModule,
    StoreModule.provideStore(reducer),
    StoreDevtoolsModule.instrumentOnlyWithExtension(),
    EffectsModule.run(UserEffects),
  ],
  providers: [
    AuthGuard,
    LoginGuard,
    UserService,
  ],
  bootstrap: [ExpComponent]
})
export class AppModule { }
