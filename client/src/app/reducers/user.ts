import { User } from '../models/user';
import * as user from '../actions/user';

export type  State = User;

const initialState: State = {
  _id: '',
  __v: 0,
  email: '',
  token: '',
  facebook: {
    id: '',
    name: '',
    profileImage: '',
    location: '',
    gender: '',
  },
  twitter: {
    id: '',
    name: '',
    profileImage: '',
    location: '',
  },
  google: {
    id: '',
    name: '',
    profileImage: '',
    location: '',
    gender: '',
  },
  github: {
    id: '',
    name: '',
    profileImage: '',
    location: '',
  },
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
