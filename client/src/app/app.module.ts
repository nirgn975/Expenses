import 'hammerjs';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { MaterialModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { reducer } from './reducers';
import { transactionReducer } from './modules/transactions/reducers';

import { AppRoutingModule } from './app-routing.module';

import { ExpComponent } from './exp.component';
import { LoginComponent } from './components/login/login.component';
import { MainComponent } from './components/main/main.component';
import { SettingsComponent } from './components/settings/settings.component';

import { AuthGuard } from './guards/auth.guard';
import { LoginGuard } from './guards/login.guard';

import { UserEffects } from './effects/user';

import { UserService } from './services/user.service';

@NgModule({
  declarations: [
    ExpComponent,
    LoginComponent,
    MainComponent,
    SettingsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    StoreModule.provideStore({ user: reducer, transaction: transactionReducer }),
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
