import 'hammerjs';
import { NO_ERRORS_SCHEMA } from '@angular/core';
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
      color: '#E91E63',
      user: '58a173fa78d435e1c6575d58',
      __v: 0
    },
    user: {
      _id: '58b13f4c75807f236705f6c5c',
      __v: 0,
      email: 'adisaar3@gmail.com',
      token: 'EAAR4ZBkaWvfABABEqyAaZABZBbFsdy4ZCO32',
      name: 'Adi Saar',
      profileImage: 'https://scontent.xx.fbcdn.net/v/t1.0-1/g',
      location: 'Israel',
      gender: 'female',
      facebookId: '3920554077552162',
      twitterId: '',
      googleId: '',
      githubId: '',
    },
    __v: 0,
    coordinates: [-79, -15]
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MaterialModule,
      ],
      declarations: [
        TransactionDetailComponent,
      ],
      schemas: [
        NO_ERRORS_SCHEMA,
      ]
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

  it('should display the Less button', () => {
    element = fixture.debugElement.query(By.css('md-card-actions')).nativeElement;
    expect(element.textContent).toContain('Less');
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

  it('should display the description', () => {
    element = fixture.debugElement.query(By.css('.description')).nativeElement;
    expect(element.textContent).toContain(transaction.description);
  });

  it('should display a Google map', () => {
    element = fixture.debugElement.query(By.css('#map')).nativeElement;
    expect(element.textContent).toContain('');
  });
});

describe('TransactionDetailComponent with date', () => {
  let component: TransactionDetailComponent;
  let fixture: ComponentFixture<TransactionDetailComponent>;
  let element: HTMLElement;
  const transaction: any = {
    _id: '58a173fb78d435e1c6575e08',
    amount: 12.5,
    date: new Date(new Date().getTime() - (500 * 20 * 60 * 1000)).toISOString(),
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
    user: {
      _id: '58b13f4c75807f236705f6c5c',
      __v: 0,
      email: 'adisaar3@gmail.com',
      token: 'EAAR4ZBkaWvfABABEqyAaZABZBbFsdy4ZCO32',
      name: 'Adi Saar',
      profileImage: 'https://scontent.xx.fbcdn.net/v/t1.0-1/g',
      location: 'Israel',
      gender: 'female',
      facebookId: '3920554077552162',
      twitterId: '',
      googleId: '',
      githubId: '',
    },
    __v: 0,
    coordinates: [-79, -15]
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MaterialModule,
      ],
      declarations: [
        TransactionDetailComponent,
      ],
      schemas: [
        NO_ERRORS_SCHEMA,
      ]
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

  it('should display the date in a momentjs now format', () => {
    let month = new Date(new Date().getTime() - (500 * 20 * 60 * 1000)).getMonth().toString();
    let day = new Date(new Date().getTime() - (500 * 20 * 60 * 1000)).getDate().toString();
    const year = new Date(new Date().getTime() - (500 * 20 * 60 * 1000)).getFullYear().toString();

    if (month < '9') {
      month = `0${parseInt(month, 10) + 1}`;
    } else {
      month = `${parseInt(month, 10) + 1}`;
    }

    if (parseInt(day, 10) < 10) {
      day = `0${parseInt(day.toString(), 10)}`;
    }

    element = fixture.debugElement.query(By.css('md-card-subtitle')).nativeElement;
    expect(element.textContent).toContain(`${month}/${day}/${year}`);
  });
});

function hexToRgb(hex) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return `rgb(${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)})`;
}
