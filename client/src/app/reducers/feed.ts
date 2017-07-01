import { Feed } from '../models/feed';
import * as feed from '../actions/feed';

export type  State = Feed[];

const initialState: State = [{
  _id: '',
  __v: 0,
  date: '',
  messageTitle: '',
  messageBody: '',
  user: {
    _id: '',
    __v: 0,
    email: '',
    token: '',
    name: '',
    profileImage: '',
    location: '',
    gender: '',
    facebookId: '',
    twitterId: '',
    googleId: '',
    githubId: '',
    connected_accounts: [],
  },
}];

export function reducer(state = initialState, action: feed.Actions): State {
  switch (action.type) {
    case feed.LOAD_FEED: {
      return initialState;
    }

    case feed.LOAD_FEED_SUCCESS: {
      return action.payload;
    }

    default: {
      return state;
    }
  }
}
