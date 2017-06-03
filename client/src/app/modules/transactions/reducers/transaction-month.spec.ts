/* tslint:disable:no-unused-variable */

import { reducer } from '../../../reducers/index';

describe('reducers', () => {
  it('should handle "Load All Transaction Months" action', () => {
    let state;
    state = reducer({
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
        githubId: ''
      },
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
          githubId: ''
        },
        __v: 0,
        coordinates: []
      }],
      transactionMonth: [{ _id: {month: 0, year: 0}}]
    }, {type: '[Transaction] Load All Transaction Months'});
    expect(state).toEqual({
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
        githubId: ''
      },
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
          githubId: ''
        },
        __v: 0,
        coordinates: []
      }],
      transactionMonth: [{_id: {month: 0, year: 0}}]
    });
  });

  it('should handle "Load All Transactions Months Success" action', () => {
    let state;
    state = reducer({
      user: {
        _id: '',
        email: '',
        token: '',
        __v: 0,
        gender: '',
        location: '',
        profileImage: '',
        name: '',
        facebookId: ''
      },
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
          githubId: ''
        },
        __v: 0,
        coordinates: []
      }],
      transactionMonth: [{ _id: {month: 0, year: 0}}]
    }, {
      payload: [{
        _id: {month: 6, year: 2017}
      }, {
        _id: {month: 8, year: 2017}
      }], type: '[Transaction] Load All Transactions Months Success'});
    expect(state).toEqual({
      user: {
        _id: '',
        email: '',
        token: '',
        __v: 0,
        gender: '',
        location: '',
        profileImage: '',
        name: ' ',
        facebookId: ''
      },
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
          githubId: ''
        },
        __v: 0,
        coordinates: []
      }],
      transactionMonth: [{
        _id: {month: 6, year: 2017}
      }, {
        _id: {month: 8, year: 2017}
      }]
    });
  });
});
