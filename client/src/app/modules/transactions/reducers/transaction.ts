import { Transaction } from '../models/transaction';
import * as transaction from '../actions/transaction';

export type  State = Transaction[];

const initialState: State = [{
  _id: '',
  amount: 0,
  date: '',
  type: '',
  description: '',
  category: {
    _id: '',
    name: '',
    icon: '',
    color: '',
    user: '',
    __v: 0
  },
  user: '',
  __v: 0,
  coordinates: [],
}];

export function reducer(state = initialState, action: transaction.Actions): State {
  switch (action.type) {
    case transaction.ActionTypes.LOAD_TRANSACTION: {
      return initialState;
    }

    case transaction.ActionTypes.LOAD_TRANSACTION_SUCCESS: {
      return action.payload;
    }

    default: {
      return state;
    }
  }
}
