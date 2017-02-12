import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OverviewsComponent } from './overviews.component';

const routes: Routes = [
  {
    path: '',
    component: OverviewsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class OverviewsRoutingModule { }
