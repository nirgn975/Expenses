import { User } from '../models/user';
import * as user from '../actions/user';

export type  State = User;

const initialState: State = {
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
};

export function reducer(state = initialState, action: user.Actions): State {
  switch (action.type) {
    case user.ActionTypes.LOAD_USER: {
      return initialState;
    }

    case user.ActionTypes.LOAD_USER_SUCCESS: {
      return action.payload;
    }

    default: {
      return state;
    }
  }
}
