import { reducer } from './index';

describe('reducers', () => {
  it('should handle "Load Feed" action', () => {
    let state;
    state = reducer({user:{_id:'',__v:0,email:'',token:'',name:'',profileImage:'',location:'',gender:'',facebookId:'',twitterId:'',googleId:'',githubId:''},feed:[{_id:'',__v:0,date:'',message_title:'',message_body:'',user:{_id:'',__v:0,email:'',token:'',name:'',profileImage:'',location:'',gender:'',facebookId:'',twitterId:'',googleId:'',githubId:''}}]}, {type:'[Feed] Load Feed'});
    expect(state).toEqual({user:{_id:'',__v:0,email:'',token:'',name:'',profileImage:'',location:'',gender:'',facebookId:'',twitterId:'',googleId:'',githubId:''},feed:[{_id:'',__v:0,date:'',message_title:'',message_body:'',user:{_id:'',__v:0,email:'',token:'',name:'',profileImage:'',location:'',gender:'',facebookId:'',twitterId:'',googleId:'',githubId:''}}]});
  });

  it('should handle "Load Feed Success" action', () => {
    let state;
    state = reducer({user:{_id:'5956b5992f2e3e7b41b629c0',email:'nirgn975@gmail.com',token:'EAAR4ZBkqEW8ABAJn5YCGDOmJ91rIOcF9sZAH6xohdwCRxrrpguAQG8B6yNvzXCLpZBWCFdiTu4nxtFlP0BqAhXGSlgEJtyxKGWiUcJtOjOfvLr6meHn1sGrjNSiVmxTteG89nQfTxkDXPGDd2yVsBFWnaAxQZBhwnW2ZBsqpk0gZDZD',__v:0,gender:'male',location:'Ramat Gan',profileImage:'https://scontent.xx.fbcdn.net/v/t1.0-1/p50x50/12741928_104043309987217_556335564347947011_n.jpg?oh=93528d307f216428b7506ef1395ac2e0&oe=59DF2FAB',name:'Nir Galon',facebookId:'395055497552662',connected_accounts:[]},feed:[{_id:'',__v:0,date:'',message_title:'',message_body:'',user:{_id:'',__v:0,email:'',token:'',name:'',profileImage:'',location:'',gender:'',facebookId:'',twitterId:'',googleId:'',githubId:''}}]}, {payload:[],type:'[Feed] Load Feed Success'});
    expect(state).toEqual({user:{_id:'5956b5992f2e3e7b41b629c0',email:'nirgn975@gmail.com',token:'EAAR4ZBkqEW8ABAJn5YCGDOmJ91rIOcF9sZAH6xohdwCRxrrpguAQG8B6yNvzXCLpZBWCFdiTu4nxtFlP0BqAhXGSlgEJtyxKGWiUcJtOjOfvLr6meHn1sGrjNSiVmxTteG89nQfTxkDXPGDd2yVsBFWnaAxQZBhwnW2ZBsqpk0gZDZD',__v:0,gender:'male',location:'Ramat Gan',profileImage:'https://scontent.xx.fbcdn.net/v/t1.0-1/p50x50/12741928_104043309987217_556335564347947011_n.jpg?oh=93528d307f216428b7506ef1395ac2e0&oe=59DF2FAB',name:'Nir Galon',facebookId:'395055497552662',connected_accounts:[]},feed:[]});
  });
});
