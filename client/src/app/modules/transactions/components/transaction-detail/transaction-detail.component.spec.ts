/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { MaterialModule } from '@angular/material';

import { TransactionDetailComponent } from './transaction-detail.component';

describe('TransactionDetailComponent', () => {
  let component: TransactionDetailComponent;
  let fixture: ComponentFixture<TransactionDetailComponent>;
  let element: HTMLElement;
  const transaction: any = {
    _id: '58a173fb78d435e1c6575e08',
    amount: 12.5,
    date: new Date(new Date().getTime() - (20 * 60 * 1000)).toISOString(),
    type: 'expense',
    description: 'description foo bar 143',
    category: {
      _id: '58a173fa78d435e1c6575d73',
      name: 'health',
      icon: 'favorite',
      color: 'grey',
      user: '58a173fa78d435e1c6575d58',
      __v: 0
    },
    user: '58a173fa78d435e1c6575d57',
    __v: 0,
    coordinates: [-79, -15]
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ MaterialModule ],
      declarations: [ TransactionDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionDetailComponent);
    component = fixture.componentInstance;

    // Create a dummy transaction.
    component.transaction = transaction;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
