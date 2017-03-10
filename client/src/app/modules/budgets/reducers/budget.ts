import { Budget } from '../models/budget';
import * as budget from '../actions/budget';

export type  State = Budget[];

const initialState: State = [{
  _id: '',
  name: '',
  limit: 0,
  currentAmount: 0,
  categories: [{
    _id: '',
    name: '',
    icon: '',
    color: '',
    user: '',
    __v: 0
  }],
  users: [{
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
  }],
  __v: 0,
}];

export function reducer(state = initialState, action: budget.Actions): State {
  switch (action.type) {
    case budget.ActionTypes.LOAD_BUDGETS: {
      return initialState;
    }

    case budget.ActionTypes.LOAD_BUDGETS_SUCCESS: {
      return action.payload;
    }

    default: {
      return state;
    }
  }
}
