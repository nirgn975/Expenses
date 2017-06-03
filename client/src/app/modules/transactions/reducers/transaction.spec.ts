/* tslint:disable:no-unused-variable */

import { reducer } from '../../../reducers/index';

describe('reducers', () => {
  it('should handle "Load Transaction" actions', () => {
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
      transactionMonth: [{
        _id: {month: 0, year: 0}
      }]
    }, {
      payload: {_id: {month: 12, year: 2017}},
      type: '[Transaction] Load Transaction'
    });
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

  it('should handle "Load Transactions Success" action', () => {
    let state;
    state = reducer({
      user: {
        _id: '59326ede589e5b7d8f283b95',
        email: 'nirgn975@gmail.com',
        token: 'EAAR4ZBkqEW8ABAOY8NiZB9G3VAXd5JHn5Fg480kwbwlwTaTPb2a0Oi4o2jRjhHv',
        __v: 0,
        gender: 'male',
        location: 'Ramat Gan',
        profileImage: 'https://scontent.xx.fbcdn.net/p50x50/12741928_104043309987217_556335564347947011_n.jpg',
        name: 'Nir Galon',
        facebookId: '395055497552662'
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
        _id: {month: 12, year: 2017}
      }]
    }, {
      payload: [{
        _id: '59326ede589e5b7d8f283c55',
        amount: 7.2,
        date: '2017-11-30T22:00:00.000Z',
        type: 'expense',
        description: 'description foo bar 158',
        category: {
          _id: '59326ede589e5b7d8f283ba3',
          name: 'taxi',
          icon: 'local_taxi',
          color: '#FFEB3B',
          user: '59326ede589e5b7d8f283b94',
          __v: 0
        },
        user: {
          _id: '59326ede589e5b7d8f283b95',
          email: 'nirgn975@gmail.com',
          token: 'EAAR4ZBkqEW8ABAOY8NiZB9G3VAXd5JHn5Fg480kwbwlwTaTPb2a0Oi4o2',
          __v: 0,
          gender: 'male',
          location: 'Ramat Gan',
          profileImage: 'https://scontent.xx.fbcdn.net/p50x50/12741928_104043309987217_556335564347947011_n.jpg',
          name: 'Nir Galon',
          facebookId: '395055497552662'
        },
        __v: 0,
        coordinates: [32.07433, 34.792017]
      }],
      type: '[Transaction] Load Transactions Success'
    });
    expect(state).toEqual({
      user: {
        _id: '59326ede589e5b7d8f283b95',
        email: 'nirgn975@gmail.com',
        token: 'EAAR4ZBkqEW8ABAOY8NiZB9G3VAXd5JHn5Fg480kwbwlwTaTPb2a0Oi4o2jRjhHv',
        __v: 0,
        gender: 'male',
        location: 'Ramat Gan',
        profileImage: 'https://scontent.xx.fbcdn.net/p50x50/12741928_104043309987217_556335564347947011_n.jpg',
        name: 'Nir Galon',
        facebookId: '395055497552662'
      },
      transaction: [{
        _id: '59326ede589e5b7d8f283c55',
        amount: 7.2,
        date: '2017-11-30T22:00:00.000Z',
        type: 'expense',
        description: 'description foo bar 158',
        category: {
          _id: '59326ede589e5b7d8f283ba3',
          name: 'taxi',
          icon: 'local_taxi',
          color: '#FFEB3B',
          user: '59326ede589e5b7d8f283b94',
          __v: 0
        },
        user: {
          _id: '59326ede589e5b7d8f283b95',
          email: 'nirgn975@gmail.com',
          token: 'EAAR4ZBkqEW8ABAOY8NiZB9G3VAXd5JHn5Fg480kwbwlwTaTPb2a0Oi4o2',
          __v: 0,
          gender: 'male',
          location: 'Ramat Gan',
          profileImage: 'https://scontent.xx.fbcdn.net/p50x50/12741928_104043309987217_556335564347947011_n.jpg',
          name: 'Nir Galon',
          facebookId: '395055497552662'
        },
        __v: 0,
        coordinates: [32.07433, 34.792017]
      }],
      transactionMonth: [{
        _id: {month: 12, year: 2017}
      }]
    });
  });
});
