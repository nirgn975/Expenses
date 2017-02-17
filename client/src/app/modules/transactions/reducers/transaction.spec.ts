/* tslint:disable:no-unused-variable */

import { reducer } from './index';

describe('reducers', () => {
  it('should handle "Load Transaction" actions', () => {
    let state;
    state = reducer({
      transaction: [{
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
        coordinates: []
      }],
      transactionMonth: [{
        _id: {
          month: 0,
          year: 0
        }
      }]
    }, {
      payload: {
        _id: {
          month: 7,
          year: 2017
        }
      }, type: '[Transaction] Load Transaction'
    });
    expect(state).toEqual({
      transaction: [{
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
        coordinates: []
      }],
      transactionMonth: [{
        _id: {
          month: 0,
          year: 0
        }
      }]
    });
  });

  it('should handle "Load Transactions Success" action', () => {
    let state;
    state = reducer({
      transaction: [{
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
        coordinates: []
      }],
      transactionMonth: [{
        _id: {
          month: 0,
          year: 0
        }
      }]}, {
      payload: [{
        _id: '58a173fb78d435e1c6575e08',
        amount: 12.5,
        date: '2017-06-30T21:00:00.000Z',
        type: 'expense',
        description: 'description foo bar 143',
        category: {
          _id: '58a173fa78d435e1c6575d73',
          name: 'health',
          icon: 'favorite',
          color: 'red',
          user: '58a173fa78d435e1c6575d58',
          __v: 0
        },
        user: '58a173fa78d435e1c6575d57',
        __v: 0,
        coordinates: [-79, -15]
      }, {
        _id: '58a173fb78d435e1c6575e0b',
        amount: 14,
        date: '2017-06-30T21:00:00.000Z',
        type: 'expense',
        description: 'description foo bar 146',
        category: {
          _id: '58a173fa78d435e1c6575d59',
          name: 'salary',
          icon: 'account_balance',
          color: 'blue',
          user: '58a173fa78d435e1c6575d56',
          __v: 0
        },
        user: '58a173fa78d435e1c6575d57',
        __v: 0,
        coordinates: [-77, -17]
      }], type: '[Transaction] Load Transactions Success'
    });
    expect(state).toEqual({
      transaction: [{
        _id: '58a173fb78d435e1c6575e08',
        amount: 12.5,
        date: '2017-06-30T21:00:00.000Z',
        type: 'expense',
        description: 'description foo bar 143',
        category: {
          _id: '58a173fa78d435e1c6575d73',
          name: 'health',
          icon: 'favorite',
          color: 'red',
          user: '58a173fa78d435e1c6575d58',
          __v: 0
        },
        user: '58a173fa78d435e1c6575d57',
        __v: 0,
        coordinates: [-79, -15]
      }, {
        _id: '58a173fb78d435e1c6575e0b',
        amount: 14,
        date: '2017-06-30T21:00:00.000Z',
        type: 'expense',
        description: 'description foo bar 146',
        category: {
          _id: '58a173fa78d435e1c6575d59',
          name: 'salary',
          icon: 'account_balance',
          color: 'blue',
          user: '58a173fa78d435e1c6575d56',
          __v: 0
        },
        user: '58a173fa78d435e1c6575d57',
        __v: 0,
        coordinates: [-77, -17]
      }],
      transactionMonth: [{
        _id: {
          month: 0,
          year: 0
        }
      }]
    });
  });
});

