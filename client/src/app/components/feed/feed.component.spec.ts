import 'hammerjs';
import { CUSTOM_ELEMENTS_SCHEMA, DebugElement } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MaterialModule } from '@angular/material';
import { By } from '@angular/platform-browser';
import { Observable } from 'rxjs/Observable';
import { reducer } from '../../reducers';
import { StoreModule } from '@ngrx/store';

import { FeedComponent } from './feed.component';
import { Feed } from '../../models/feed';

describe('FeedComponent', () => {
  let component: FeedComponent;
  let fixture: ComponentFixture<FeedComponent>;
  const feed$: Observable<Feed[]> = Observable.of([{
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
  }]);

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MaterialModule,
        StoreModule.provideStore(reducer),
      ],
      declarations: [ FeedComponent ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedComponent);
    component = fixture.componentInstance;

    // Create a dummy feed.
    component.feed$ = feed$;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should display two message components', () => {
    const elements: DebugElement[] = fixture.debugElement.queryAll(By.css('exp-message'));
    expect(elements.length).toEqual(2);
  });
});
