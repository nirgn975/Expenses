import { reducer } from './index';

describe('reducers', () => {
  it('should handle "Load User" action', () => {
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
         githubId: '',
         connected_accounts: []
       },
       feed: [{
         _id: '',
         __v: 0,
         date: '',
         messageTitle: '',
         messageBody: '',
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
           connected_accounts: []
         }
       }]
     }, {
       type: '[User] Load User'
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
         githubId: '',
         connected_accounts: []
       },
       feed: [{
         _id: '',
         __v: 0,
         date: '',
         messageTitle: '',
         messageBody: '',
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
           connected_accounts: []
         }
       }]
     });
  });

  it('should handle "Load User Success" action', () => {
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
        githubId: '',
        connected_accounts: []
      },
      feed: [{
        _id: '',
        __v: 0,
        date: '',
        messageTitle: '',
        messageBody: '',
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
          connected_accounts: []
        }
      }]
    }, {
      payload: {
        _id: '5956b5992f2e3e7b41b629c0',
        email: 'nirgn975@gmail.com',
        token: 'DOmJ91rIOcF9sZAH6xohdwCRxrrpguAQG8B6yNvzXCLpZBWCFdiTu4nxtFlP0BqAhXGSlgEJtyxKGWiUcJtOjOfvLr6meHn',
        __v: 0,
        gender: 'male',
        location: 'Ramat Gan',
        profileImage: 'https://scontent.xx.fbcdn.net/12741928_104043309987217_556335564347947011_n.jpg',
        name: 'Nir Galon',
        facebookId: '395055497552662',
        connected_accounts: []
      },
      type: '[User] Load User Success'
    });
    expect(state).toEqual({
      user: {
        _id: '5956b5992f2e3e7b41b629c0',
        email: 'nirgn975@gmail.com',
        token: 'DOmJ91rIOcF9sZAH6xohdwCRxrrpguAQG8B6yNvzXCLpZBWCFdiTu4nxtFlP0BqAhXGSlgEJtyxKGWiUcJtOjOfvLr6meHn',
        __v: 0,
        gender: 'male',
        location: 'Ramat Gan',
        profileImage: 'https://scontent.xx.fbcdn.net/12741928_104043309987217_556335564347947011_n.jpg',
        name: 'Nir Galon',
        facebookId: '395055497552662',
        connected_accounts: []
      },
      feed: [{
        _id: '',
        __v: 0,
        date: '',
        messageTitle: '',
        messageBody: '',
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
          connected_accounts: []
        }
      }]
    });
  });
});
