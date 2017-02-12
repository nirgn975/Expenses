import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';

import { UsersRoutingModule } from './users-routing.module';

import { UsersComponent } from './users.component';

@NgModule({
  declarations: [
    UsersComponent,
  ],
  imports: [
    CommonModule,
    HttpModule,
    UsersRoutingModule,
    MaterialModule.forRoot(),
  ],
  providers: [

  ],
})
export class UsersModule { }
