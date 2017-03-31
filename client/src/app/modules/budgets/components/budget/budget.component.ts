import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import * as moment from 'moment';

import { Budget } from '../../models/budget';

@Component({
  selector: 'exp-budget',
  templateUrl: './budget.component.html',
  styleUrls: ['./budget.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BudgetComponent {
  @Input() budget: Budget;

  constructor() { }

}
