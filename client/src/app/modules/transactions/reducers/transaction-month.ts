import { TransactionMonth } from '../models/transaction-month';
import * as transaction from '../actions/transaction';

export type  State = TransactionMonth[];

const initialState: State = [{
  _id: {
    month: 0,
    year: 0,
  }
}];

export function reducer(state = initialState, action: transaction.Actions): State {
  switch (action.type) {
    case transaction.LOAD_TRANSACTION_MONTHS: {
      return initialState;
    }

    case transaction.LOAD_TRANSACTION_MONTHS_SUCCESS: {
      return action.payload;
    }

    default: {
      return state;
    }
  }
}
