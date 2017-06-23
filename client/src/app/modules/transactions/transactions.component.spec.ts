import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { MaterialModule } from '@angular/material';
import { Observable } from 'rxjs/Observable';
import { RouterTestingModule } from '@angular/router/testing';
import { reducer } from './reducers';
import { StoreModule } from '@ngrx/store';

import { TransactionsComponent } from './transactions.component';
import { TransactionMonth } from './models/transaction-month';

describe('TransactionsComponent', () => {
  let component: TransactionsComponent;
  let fixture: ComponentFixture<TransactionsComponent>;
  let elements: DebugElement[];
  const transactionMonths$ = Observable.of([{
    _id: {
      month: 6,
      year: 2017,
    }
  }, {
    _id: {
      month: 7,
      year: 2017,
    }
  }, {
    _id: {
      month: 8,
      year: 2017,
    }
  }]);

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MaterialModule,
        RouterTestingModule,
        StoreModule.provideStore(reducer),
      ],
      declarations: [
        TransactionsComponent,
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionsComponent);
    component = fixture.componentInstance;

    // Create a dummy transactionMonths.
    component.transactionMonths$ = transactionMonths$;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the category month and year', () => {
    elements = fixture.debugElement.queryAll(By.css('nav a'));
    const transactionMonths = ['2017-6', '2017-7', '2017-8'];

    elements.map((elem, index) => {
      expect(elem.nativeElement.textContent).toContain(transactionMonths[index]);
    });
  });
});
