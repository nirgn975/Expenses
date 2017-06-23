import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';

import * as fromRoot from '../../reducers';
import * as budgetAction from '../../actions/budget';
import { Budget } from '../../models/budget';

@Component({
  selector: 'exp-budget-list',
  templateUrl: './budget-list.component.html',
  styleUrls: ['./budget-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BudgetListComponent implements OnInit {
  private budget$: Observable<Budget[]>;

  constructor(
    private store: Store<fromRoot.State>,
  ) {
    this.budget$ = store.select(fromRoot.getBudgetsState);
  }

  ngOnInit() {
    this.store.dispatch(new budgetAction.LoadBudgetsAction());
  }
}
