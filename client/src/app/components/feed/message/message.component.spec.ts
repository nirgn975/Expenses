import 'hammerjs';
import { CUSTOM_ELEMENTS_SCHEMA, DebugElement } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { MaterialModule } from '@angular/material';

import { MessageComponent } from './message.component';
import { Feed } from '../../../models/feed';

describe('MessageComponent', () => {
  let component: MessageComponent;
  let fixture: ComponentFixture<MessageComponent>;
  const feed: Feed = {
    _id: '58a173fb78d435e1c6575e08',
    __v: 0,
    date: new Date(new Date().getTime() - (20 * 60 * 1000)).toISOString(),
    messageTitle: 'adi added a new budget!',
    messageBody: 'adi add a new budget for movies, it\'s includes food, movies, and dvd categories.',
    user: {
      _id: '58a173fa78d435e1c6575d73',
      __v: 0,
      email: 'nir@example.com',
      token: 'xrrpguAQG8B6yNvzXCLpZBWCFdiTu4nxtFlP0BqAhXG',
      name: 'Nir',
      profileImage: 'https://scontent.xx.fbcdn.net/12741928_556335564347947011_n.jpg',
      location: 'Israel',
      gender: 'male',
      facebookId: '58a173fa78d435e1c6575d58',
      twitterId: '58a173fa78d435e1c6575d58',
      googleId: '58a173fa78d435e1c6575d58',
      githubId: '58a173fa78d435e1c6575d58',
      connected_accounts: [],
    }
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ MaterialModule ],
      declarations: [ MessageComponent ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessageComponent);
    component = fixture.componentInstance;

    // Create a dummy feed.
    component.message = feed;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the user profile image', () => {
    const element: HTMLElement = fixture.debugElement.query(By.css('img')).nativeElement;
    expect(element.getAttribute('src')).toContain(feed.user.profileImage);
  });

  it('should display the user name in the card title', () => {
    const element: HTMLElement = fixture.debugElement.query(By.css('md-card-title')).nativeElement;
    expect(element.textContent).toContain(feed.user.name);
  });

  it('should display the message title and body', () => {
    const element: HTMLElement = fixture.debugElement.query(By.css('md-card-content')).nativeElement;
    expect(element.textContent).toContain(feed.messageTitle);
    expect(element.textContent).toContain(feed.messageBody);
  });
});
