import 'hammerjs';
import { CUSTOM_ELEMENTS_SCHEMA, DebugElement } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Observable } from 'rxjs/Observable';
import { MaterialModule } from '@angular/material';
import { RouterTestingModule } from '@angular/router/testing';
import { reducer } from '../../reducers';
import { StoreModule } from '@ngrx/store';

import { TransactionListComponent } from './transaction-list.component';

describe('TransactionListComponent', () => {
  let component: TransactionListComponent;
  let fixture: ComponentFixture<TransactionListComponent>;
  const transaction$ = Observable.of([{
    _id: '0',
    amount: 0,
    date: '',
    type: '',
    description: '',
    category: {
      _id: '1',
      name: '',
      icon: '',
      color: '',
      user: '',
      __v: 0,
    },
    user: {
      _id: '2',
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
    coordinates: [0, 0],
  }, {
    _id: '3',
    amount: 0,
    date: '',
    type: '',
    description: '',
    category: {
      _id: '4',
      name: '',
      icon: '',
      color: '',
      user: '',
      __v: 0,
    },
    user: {
      _id: '5',
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
    coordinates: [0, 0],
  }]);

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MaterialModule,
        RouterTestingModule,
        StoreModule.provideStore(reducer),
      ],
      declarations: [ TransactionListComponent ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionListComponent);
    component = fixture.componentInstance;

    // Create a dummy transactionMonths.
    component.transaction$ = transaction$;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display an add button', () => {
    const element: HTMLElement = fixture.debugElement.query(By.css('button')).nativeElement;
    expect(element.textContent).toContain('add');
  });

  it('should display two transaction components', () => {
    const elements: DebugElement[] = fixture.debugElement.queryAll(By.css('exp-transaction'));
    expect(elements.length).toEqual(2);
  });
});
