/* tslint:disable:no-unused-variable */

import { reducer } from './index';


describe('reducers', () => {
  it('should handle "Load Transaction" actions', () => {
    let state;
    state = reducer({
      transaction: [{_id: '', amount: 0, date: '', type: '', description: '', category: '', __v: 0, coordinates: ''}],
      transactionMonth: [{_id: {month: 0, year: 0}}]
    }, {type: '[Transaction] Load Transaction'});
    expect(state).toEqual({
      transaction: [{_id: '', amount: 0, date: '', type: '', description: '', category: '', __v: 0, coordinates: ''}],
      transactionMonth: [{_id: {month: 0, year: 0}}]
    });
  });

  it('should handle "Load Transactions Success" action', () => {
    let state;
    state = reducer({
      transaction: [{_id: '', amount: 0, date: '', type: '', description: '', category: '', __v: 0, coordinates: ''}],
      transactionMonth: []
    }, {
      payload: [{
        _id: '5891ce58165eb62d2b84760f',
        amount: 23,
        date: '2017-02-01T12:02:32.607Z',
        type: 'expense',
        description: 'description foo bar 1',
        category: '5891ce58165eb62d2b847606',
        __v: 0,
        coordinates: [21, 22]
      }, {
        _id: '5891ce58165eb62d2b847610',
        amount: 54,
        date: '2017-02-01T12:02:32.607Z',
        type: 'income',
        description: 'description foo bar 2',
        category: '5891ce58165eb62d2b847607',
        __v: 0,
        coordinates: [21, 42]
      }], type: '[Transaction] Load Transactions Success'});
    expect(state).toEqual({
      transaction: [{
        _id: '5891ce58165eb62d2b84760f',
        amount: 23,
        date: '2017-02-01T12:02:32.607Z',
        type: 'expense',
        description: 'description foo bar 1',
        category: '5891ce58165eb62d2b847606',
        __v: 0,
        coordinates: [21, 22]
      }, {
        _id: '5891ce58165eb62d2b847610',
        amount: 54,
        date: '2017-02-01T12:02:32.607Z',
        type: 'income',
        description: 'description foo bar 2',
        category: '5891ce58165eb62d2b847607',
        __v: 0,
        coordinates: [21, 42]
      }],
      transactionMonth: []
    });
  });
});

