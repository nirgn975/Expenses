import 'hammerjs';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { MaterialModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { reducers } from './reducers';
import { AppRoutingModule } from './app-routing.module';

import { ExpComponent } from './exp.component';
import { FeedComponent } from './components/feed/feed.component';
import { LoginComponent } from './components/login/login.component';
import { MainComponent } from './components/main/main.component';
import { SettingsComponent } from './components/settings/settings.component';
import { MessageComponent } from './components/feed/message/message.component';

import { AuthGuard } from './guards/auth.guard';
import { LoginGuard } from './guards/login.guard';

import { UserEffects } from './effects/user';
import { FeedEffects } from './effects/feed';

import { UserService } from './services/user.service';
import { FeedService } from './services/feed.service';

import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    ExpComponent,
    FeedComponent,
    LoginComponent,
    MainComponent,
    SettingsComponent,
    MessageComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    StoreModule.forRoot(reducers),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    EffectsModule.forRoot([
      UserEffects,
      FeedEffects,
    ]),
  ],
  providers: [
    AuthGuard,
    LoginGuard,
    UserService,
    FeedService,
  ],
  bootstrap: [ExpComponent]
})
export class AppModule { }
