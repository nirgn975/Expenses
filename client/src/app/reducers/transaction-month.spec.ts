/* tslint:disable:no-unused-variable */

import { reducer } from './index';


describe('reducers', () => {
  it('should handle "Load All Transaction Months" action', () => {
    let state;
    state = reducer({
      transaction: [{_id: '', amount: 0, date: '', type: '', description: '', category: '', __v: 0, coordinates: ''}],
      transactionMonth: [{_id: {month: 0, year: 0}}]
    }, {type: '[Transaction] Load All Transaction Months'});
    expect(state).toEqual({
      transaction: [{_id: '', amount: 0, date: '', type: '', description: '', category: '', __v: 0, coordinates: ''}],
      transactionMonth: [{_id: {month: 0, year: 0}}]
    });
  });

  it('should handle "Load All Transactions Months Success" action', () => {
    let state;
    state = reducer({
      transaction: [],
      transactionMonth: [{
        _id: {month: 0, year: 0}
      }]
    }, {
      payload: [{
        _id: {month: 3, year: 2017}
      }, {
        _id: {month: 2, year: 2017}
      }], type: '[Transaction] Load All Transactions Months Success'});
    expect(state).toEqual({
      transaction: [],
      transactionMonth: [{
          _id: {month: 3, year: 2017}
        }, {
          _id: {month: 2, year: 2017}
        }]});
  });
});

