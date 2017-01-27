import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './components/login/login.component';
import { MainComponent } from './components/main/main.component';
import { TransactionViewComponent } from './components/transaction-view/transaction-view.component';
import { BudgetsViewComponent } from './components/budgets-view/budgets-view.component';
import { SettingsViewComponent } from './components/settings-view/settings-view.component';

import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'home', redirectTo: 'home/transactions', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {
    path: 'home',
    component: MainComponent,
    canActivateChild: [AuthGuard],
    children: [
      { path: 'transactions',  component: TransactionViewComponent, },
      { path: 'budgets',  component: BudgetsViewComponent, },
      { path: 'settings',  component: SettingsViewComponent, },
    ]
  },
];


@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
