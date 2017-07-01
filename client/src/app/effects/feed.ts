import 'rxjs/add/operator/switchMap';
import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { FeedService } from '../services/feed.service';
import * as feed from '../actions/feed';

@Injectable()
export class FeedEffects {
  constructor(
    private actions$: Actions,
    private feedService: FeedService
  ) { }

  @Effect()
  loadFeed$: Observable<Action>= this.actions$
    .ofType(feed.LOAD_FEED)
    .switchMap(() => this.feedService.getFeed())
    .map(info => new feed.LoadFeedSuccessAction(info));
}
