import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import * as moment from 'moment';

import { Budget } from '../../models/budget';

@Component({
  selector: 'exp-budget',
  templateUrl: './budget.component.html',
  styleUrls: ['./budget.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BudgetComponent implements OnInit {
  @Input() budget: Budget;
  public budgetDate: string;
  public showDetail: Boolean = false;

  constructor() { }

  ngOnInit() {
    // const originalTime = new Date(this.budget.date);
    // const now = new Date();
    // 
    // // Check if the year, month and day are the same as now
    // if (originalTime.getFullYear() === now.getFullYear() &&
    //     originalTime.getMonth() === now.getMonth() &&
    //     originalTime.getDate() === now.getDate()) {
    //   this.budgetDate = moment(this.budget.date).fromNow();
    // } else {
    //   this.budgetDate = moment(this.budget.date).calendar();
    // }
  }

  showMore($event) {
    this.showDetail = $event;
  }
}
