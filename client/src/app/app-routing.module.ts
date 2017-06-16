import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './components/login/login.component';
import { MainComponent } from './components/main/main.component';
import { SettingsComponent } from './components/settings/settings.component';

import { AuthGuard } from './guards/auth.guard';
import { LoginGuard } from './guards/login.guard';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'home', redirectTo: 'home/transactions', pathMatch: 'full' },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [LoginGuard],
  },
  {
    path: 'home',
    component: MainComponent,
    canActivate: [AuthGuard],
    canActivateChild: [AuthGuard],
    children: [
      { path: 'transactions', loadChildren: 'app/modules/transactions/transactions.module#TransactionsModule' },
      { path: 'overview', loadChildren: 'app/modules/overviews/overviews.module#OverviewsModule' },
      { path: 'budgets', loadChildren: 'app/modules/budgets/budgets.module#BudgetsModule' },
      { path: 'users', loadChildren: 'app/modules/users/users.module#UsersModule' },
      { path: 'settings', component: SettingsComponent, },
    ]
  },
];


@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
