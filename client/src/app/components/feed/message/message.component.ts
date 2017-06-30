import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import * as moment from 'moment';

import { Feed } from '../../../models/feed';

@Component({
  selector: 'exp-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MessageComponent implements OnInit {
  @Input() message: Feed;
  public messageDate: string;

  constructor() { }

  ngOnInit() {
    const originalTime = new Date(this.message.date);
    const now = new Date();

    // Check if the year, month and day are the same as now
    if (originalTime.getFullYear() === now.getFullYear() &&
        originalTime.getMonth() === now.getMonth() &&
        originalTime.getDate() === now.getDate()) {
      this.messageDate = moment(this.message.date).fromNow();
    } else {
      this.messageDate = moment(this.message.date).calendar();
    }
  }

}
