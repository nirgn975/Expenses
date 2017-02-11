/* tslint:disable:no-unused-variable */

import { reducer } from './index';

describe('reducers', () => {
  it('should handle "Load User" actions', () => {
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
      }}, { type: '[User] Load User' });
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
      }});
  });

  it('should handle "Load User Success" actions', () => {
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
      }}, {
      payload: {
        _id: '589e3a7e40c779963224bdbb',
        email: 'nirgn975@gmail.com',
        token: 'EAAR4ZBkqEW8ABAMQfz7mf7kWqofsbjMJzxNkZD',
        __v: 0,
        gender: 'male',
        location: 'Ramat Gan',
        profileImage: 'https://scontent.xx.fbcdn.net/_556335564347947011_n.jpg',
        name: 'Nir Galon',
        facebookId: '395055497552662'
      }, type: '[User] Load User Success'});
    expect(state).toEqual({
      user: {
        _id: '589e3a7e40c779963224bdbb',
        email: 'nirgn975@gmail.com',
        token: 'EAAR4ZBkqEW8ABAMQfz7mf7kWqofsbjMJzxNkZD',
        __v: 0,
        gender: 'male',
        location: 'Ramat Gan',
        profileImage: 'https://scontent.xx.fbcdn.net/_556335564347947011_n.jpg',
        name: 'Nir Galon',
        facebookId: '395055497552662'
      }});
  });
});

