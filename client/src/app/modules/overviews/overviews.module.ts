import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';

import { OverviewsRoutingModule } from './overviews-routing.module';

import { OverviewsComponent } from './overviews.component';

@NgModule({
  declarations: [
    OverviewsComponent
  ],
  imports: [
    CommonModule,
    HttpModule,
    OverviewsRoutingModule,
    MaterialModule,
  ],
  providers: [

  ],
})
export class OverviewsModule { }
