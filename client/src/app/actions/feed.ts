import { Action } from '@ngrx/store';
import { Feed } from '../models/feed';

export const LOAD_FEED =  '[Feed] Load Feed';
export const LOAD_FEED_SUCCESS = '[Feed] Load Feed Success';

export class LoadFeedAction implements Action {
  readonly type = LOAD_FEED;

  constructor() { }
}

export class LoadFeedSuccessAction implements Action {
  readonly type = LOAD_FEED_SUCCESS;

  constructor(public payload: Feed[]) { }
}

export type Actions
  = LoadFeedAction
  | LoadFeedSuccessAction;
