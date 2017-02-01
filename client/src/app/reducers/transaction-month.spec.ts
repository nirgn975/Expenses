/* tslint:disable:no-unused-variable */

import { reducer } from './index';


describe('reducers', () => {
  it('should handle "Load All Transaction Months" action', () => {
    let state;
    state = reducer({transaction:[{_id:'',amount:0,date:'',type:'',description:'',category:'',__v:0,coordinates:''}],transactionMonth:[{_id:{month:0,year:0}}]}, {type:'[Transaction] Load All Transaction Months'});
    expect(state).toEqual({transaction:[{_id:'',amount:0,date:'',type:'',description:'',category:'',__v:0,coordinates:''}],transactionMonth:[{_id:{month:0,year:0}}]});
  });

  it('should handle "Load All Transactions Months Success" action', () => {
    let state;
    state = reducer({transaction:[{_id:'5891ce58165eb62d2b84760f',amount:23,date:'2017-02-01T12:02:32.607Z',type:'expense',description:'description foo bar 1',category:'5891ce58165eb62d2b847606',__v:0,coordinates:[21,22]},{_id:'5891ce58165eb62d2b847610',amount:54,date:'2017-02-01T12:02:32.607Z',type:'income',description:'description foo bar 2',category:'5891ce58165eb62d2b847607',__v:0,coordinates:[21,42]},{_id:'5891ce58165eb62d2b847611',amount:76,date:'2017-02-01T12:02:32.607Z',type:'expense',description:'description foo bar 3',category:'5891ce58165eb62d2b847608',__v:0,coordinates:[15,12]},{_id:'5891ce58165eb62d2b847612',amount:1009,date:'2017-02-01T12:02:32.607Z',type:'income',description:'description foo bar 4',category:'5891ce58165eb62d2b847609',__v:0,coordinates:[-23,76]}],transactionMonth:[{_id:{month:0,year:0}}]}, {payload:[{_id:{month:3,year:2017}},{_id:{month:2,year:2017}}],type:'[Transaction] Load All Transactions Months Success'});
    expect(state).toEqual({transaction:[{_id:'5891ce58165eb62d2b84760f',amount:23,date:'2017-02-01T12:02:32.607Z',type:'expense',description:'description foo bar 1',category:'5891ce58165eb62d2b847606',__v:0,coordinates:[21,22]},{_id:'5891ce58165eb62d2b847610',amount:54,date:'2017-02-01T12:02:32.607Z',type:'income',description:'description foo bar 2',category:'5891ce58165eb62d2b847607',__v:0,coordinates:[21,42]},{_id:'5891ce58165eb62d2b847611',amount:76,date:'2017-02-01T12:02:32.607Z',type:'expense',description:'description foo bar 3',category:'5891ce58165eb62d2b847608',__v:0,coordinates:[15,12]},{_id:'5891ce58165eb62d2b847612',amount:1009,date:'2017-02-01T12:02:32.607Z',type:'income',description:'description foo bar 4',category:'5891ce58165eb62d2b847609',__v:0,coordinates:[-23,76]}],transactionMonth:[{_id:{month:3,year:2017}},{_id:{month:2,year:2017}}]});
  });
});

