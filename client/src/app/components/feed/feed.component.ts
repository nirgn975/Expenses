import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
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
  public feed$: Observable<Feed[]>;

  constructor(
    private store: Store<fromRoot.State>,
  ) {
    this.feed$ = this.store.select(fromRoot.getFeedState);
  }

  ngOnInit() {
    this.store.dispatch(new feedAction.LoadFeedAction());
  }
}
