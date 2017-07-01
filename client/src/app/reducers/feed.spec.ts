import { reducer } from './index';

describe('reducers', () => {
  it('should handle "Load Feed" action', () => {
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
      type: '[Feed] Load Feed'
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

  it('should handle "Load Feed Success" action', () => {
    let state;
      state = reducer({
        user: {
          _id: '5956ccd7e3d7509659e7583c',
          email: 'nirgn975@gmail.com',
          token: 'mSCMZAUOwZCnSaBrnGUAf50gT3AgxgoNR0Yl4CJgZBju9TXyp2A4PSZAMNxIlZBBHDXAgZCZCAAdJznJsTbBH',
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
      }, {
        payload: [{
          _id: '5956ccd8e3d7509659e75a68',
          date: '2017-06-30T22:32:39.790Z',
          messageTitle: 'adi added a new budget!',
          messageBody: 'adi add a new budget for movies, it\'s includes food, movies, and dvd categories.',
          user: {
            _id: '5956ccd7e3d7509659e7583c',
            email: 'nirgn975@gmail.com',
            token: 'HDXAgZCZCAAdJznJsTbBHD1mijfvIMfivBk5PPR0z10qU6Jl72OcwCUk581AinfVp8qZCN6DnwTQZDZD',
            __v: 0,
            gender: 'male',
            location: 'Ramat Gan',
            profileImage: 'https://scontent.xx.fbcdn.net/12741928_104043309987217_556335564347947011_n.jpg',
            name: 'Nir Galon',
            facebookId: '395055497552662',
            connected_accounts: []
          },
          __v: 0
        }, {
          _id: '5956ccd8e3d7509659e75a6b',
          date: '2017-06-30T22:12:39.790Z',
          messageTitle: 'feed title 2',
          messageBody: 'feed body 2',
          user: {
            _id: '5956ccd7e3d7509659e7583c',
            email: 'nirgn975@gmail.com',
            token: 'EAAR4ZBkqEW8ABAHsl8WO7o1JXGpLSSMgqSEmSCMZAUOwZCnSaBrnGUAf50gT3AgxgoNR0Yl4CJgZBju9TXyp',
            __v: 0,
            gender: 'male',
            location: 'Ramat Gan',
            profileImage: 'https://scontent.xx.fbcdn.net/12741928_104043309987217_556335564347947011_n.jpg',
            name: 'Nir Galon',
            facebookId: '395055497552662',
            connected_accounts: []
          },
          __v: 0
        }],
        type: '[Feed] Load Feed Success'
      });
    expect(state).toEqual({
      user: {
        _id: '5956ccd7e3d7509659e7583c',
        email: 'nirgn975@gmail.com',
        token: 'mSCMZAUOwZCnSaBrnGUAf50gT3AgxgoNR0Yl4CJgZBju9TXyp2A4PSZAMNxIlZBBHDXAgZCZCAAdJznJsTbBH',
        __v: 0,
        gender: 'male',
        location: 'Ramat Gan',
        profileImage: 'https://scontent.xx.fbcdn.net/12741928_104043309987217_556335564347947011_n.jpg',
        name: 'Nir Galon',
        facebookId: '395055497552662',
        connected_accounts: []
      },
      feed: [{
        _id: '5956ccd8e3d7509659e75a68',
        date: '2017-06-30T22:32:39.790Z',
        messageTitle: 'adi added a new budget!',
        messageBody: 'adi add a new budget for movies, it\'s includes food, movies, and dvd categories.',
        user: {
          _id: '5956ccd7e3d7509659e7583c',
          email: 'nirgn975@gmail.com',
          token: 'HDXAgZCZCAAdJznJsTbBHD1mijfvIMfivBk5PPR0z10qU6Jl72OcwCUk581AinfVp8qZCN6DnwTQZDZD',
          __v: 0,
          gender: 'male',
          location: 'Ramat Gan',
          profileImage: 'https://scontent.xx.fbcdn.net/12741928_104043309987217_556335564347947011_n.jpg',
          name: 'Nir Galon',
          facebookId: '395055497552662',
          connected_accounts: []
        },
        __v: 0
      }, {
        _id: '5956ccd8e3d7509659e75a6b',
        date: '2017-06-30T22:12:39.790Z',
        messageTitle: 'feed title 2',
        messageBody: 'feed body 2',
        user: {
          _id: '5956ccd7e3d7509659e7583c',
          email: 'nirgn975@gmail.com',
          token: 'EAAR4ZBkqEW8ABAHsl8WO7o1JXGpLSSMgqSEmSCMZAUOwZCnSaBrnGUAf50gT3AgxgoNR0Yl4CJgZBju9TXyp',
          __v: 0,
          gender: 'male',
          location: 'Ramat Gan',
          profileImage: 'https://scontent.xx.fbcdn.net/12741928_104043309987217_556335564347947011_n.jpg',
          name: 'Nir Galon',
          facebookId: '395055497552662',
          connected_accounts: []
        },
        __v: 0
      }]
    });
  });
});
