import { transactionReducer } from './index';

describe('reducers', () => {
  it('should handle "Load Transaction" actions', () => {
    let state;
    state = transactionReducer({
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
          githubId: '',
        },
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
          githubId: '',
        },
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
    state = transactionReducer({
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
          githubId: '',
        },
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
          color: '#E91E63',
          user: '58a173fa78d435e1c6575d58',
          __v: 0
        },
        user: {
          _id: '58b13a2c75807f66705f6c5c',
          __v: 0,
          email: 'nirgn975@gmail.com',
          token: 'EAAR4ZBkqEW8ABABEqyAaZABZBbFsy4ZCO32',
          name: 'Nir Galon',
          profileImage: 'https://scontent.xx.fbcdn.net/v/t1.0-1/p',
          location: 'Ramat Gan',
          gender: 'male',
          facebookId: '395055497552662',
          twitterId: '',
          googleId: '',
          githubId: '',
        },
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
          color: '#009688',
          user: '58a173fa78d435e1c6575d56',
          __v: 0
        },
        user: {
          _id: '58b13f4c75807f236705f6c5c',
          __v: 0,
          email: 'adisaar3@gmail.com',
          token: 'EAAR4ZBkaWvfABABEqyAaZABZBbFsdy4ZCO32',
          name: 'Adi Saar',
          profileImage: 'https://scontent.xx.fbcdn.net/v/t1.0-1/g',
          location: 'Israel',
          gender: 'female',
          facebookId: '3920554077552162',
          twitterId: '',
          googleId: '',
          githubId: '',
        },
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
          color: '#E91E63',
          user: '58a173fa78d435e1c6575d58',
          __v: 0
        },
        user: {
          _id: '58b13a2c75807f66705f6c5c',
          __v: 0,
          email: 'nirgn975@gmail.com',
          token: 'EAAR4ZBkqEW8ABABEqyAaZABZBbFsy4ZCO32',
          name: 'Nir Galon',
          profileImage: 'https://scontent.xx.fbcdn.net/v/t1.0-1/p',
          location: 'Ramat Gan',
          gender: 'male',
          facebookId: '395055497552662',
          twitterId: '',
          googleId: '',
          githubId: '',
        },
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
          color: '#009688',
          user: '58a173fa78d435e1c6575d56',
          __v: 0
        },
        user: {
          _id: '58b13f4c75807f236705f6c5c',
          __v: 0,
          email: 'adisaar3@gmail.com',
          token: 'EAAR4ZBkaWvfABABEqyAaZABZBbFsdy4ZCO32',
          name: 'Adi Saar',
          profileImage: 'https://scontent.xx.fbcdn.net/v/t1.0-1/g',
          location: 'Israel',
          gender: 'female',
          facebookId: '3920554077552162',
          twitterId: '',
          googleId: '',
          githubId: '',
        },
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
