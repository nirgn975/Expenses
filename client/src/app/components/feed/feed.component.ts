import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';

import * as fromRoot from '../../reducers';
import * as feedAction from '../../actions/feed';
import { Feed } from '../../models/feed';

@Component({
  selector: 'exp-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FeedComponent implements OnInit {
  public feed$: Array<Feed>;

  constructor(
    private store: Store<fromRoot.State>,
  ) {
    store.select(fromRoot.getFeedState).subscribe(
      res => this.feed$ = res
    );
  }

  ngOnInit() {
    this.store.dispatch(new feedAction.LoadFeedAction());
  }
}
