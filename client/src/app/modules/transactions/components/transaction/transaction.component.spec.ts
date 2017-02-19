/* tslint:disable:no-unused-variable */
import 'hammerjs';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { MaterialModule } from '@angular/material';

import { TransactionComponent } from './transaction.component';

describe('TransactionComponent', () => {
  let component: TransactionComponent;
  let fixture: ComponentFixture<TransactionComponent>;
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
      color: '#E91E63',
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
      declarations: [ TransactionComponent ],
      schemas: [ NO_ERRORS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionComponent);
    component = fixture.componentInstance;

    // Create a dummy transaction.
    component.transaction = transaction;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display amount and a minus sign', () => {
    element = fixture.debugElement.query(By.css('md-card-title')).nativeElement;
    expect(element.textContent).toContain(transaction.amount);
    expect(element.textContent).toContain('-');
  });

  it('should display the category name and icon', () => {
    element = fixture.debugElement.query(By.css('.category')).nativeElement;
    expect(element.textContent).toContain(transaction.category.name);
    expect(element.textContent).toContain(transaction.category.icon);
  });

  it('should display the category background color as the chip background color', () => {
    element = fixture.debugElement.query(By.css('md-chip')).nativeElement;
    const rgbColor = hexToRgb(transaction.category.color);
    expect(element.style['background-color']).toContain(rgbColor);
  });

  it('should display the date in a momentjs now format', () => {
    element = fixture.debugElement.query(By.css('md-card-subtitle')).nativeElement;
    expect(element.textContent).toContain('20 minutes ago');
  });
});

function hexToRgb(hex) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return `rgb(${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)})`;
}
