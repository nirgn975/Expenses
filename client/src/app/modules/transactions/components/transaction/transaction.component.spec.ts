/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { MaterialModule } from '@angular/material';

import { TransactionComponent } from './transaction.component';

describe('TransactionComponent', () => {
  let component: TransactionComponent;
  let fixture: ComponentFixture<TransactionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MaterialModule.forRoot(),
      ],
      declarations: [ TransactionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionComponent);
    component = fixture.componentInstance;

    // Create a dummy transaction.
    const now = new Date();
    component.transaction = {
      _id: '5891ce58165eb62d2b84760f',
      amount: 23,
      date: new Date(now.getTime() + (20 * 60 * 1000)).toISOString(),
      type: 'expense',
      description: 'description foo bar 1',
      category: '5891ce58165eb62d2b847606',
      __v: 0,
      coordinates: [21, 22],
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
