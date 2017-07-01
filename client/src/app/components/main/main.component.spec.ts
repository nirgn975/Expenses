import 'hammerjs';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { MaterialModule } from '@angular/material';
import { RouterTestingModule } from '@angular/router/testing';
import { reducer } from '../../reducers';
import { StoreModule } from '@ngrx/store';

import { MainComponent } from './main.component';

describe('MainComponent', () => {
  let component: MainComponent;
  let fixture: ComponentFixture<MainComponent>;
  let debugs: DebugElement[];
  let debug: DebugElement;
  let element: HTMLElement;
  const user: any = {
    _id: '589e3a7e40c779963224bdbb',
    email: 'nirgn975@gmail.com',
    token: 'EAAR4ZBkqEW8ABAMQfz7mf7kWqofsbjMJzxNkZD',
    __v: 0,
    gender: 'male',
    location: 'Ramat Gan',
    profileImage: 'https://scontent.xx.fbcdn.net/_556335564347947011_n.jpg',
    name: 'Nir Galon',
    facebookId: '395055497552662'
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MaterialModule,
        RouterTestingModule,
        StoreModule.provideStore(reducer),
      ],
      declarations: [ MainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainComponent);
    component = fixture.componentInstance;

    // Create dummy user info
    component.user$ = user;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display those nav buttons, in that order, with those icons and links', () => {
    const links = [
      { url: '/home/feed', icon: 'dashboard', text: 'Feed', },
      { url: '/home/transactions', icon: 'list', text: 'Transactions', },
      { url: '/home/overview', icon: 'timeline', text: 'Overview', },
      { url: '/home/budgets', icon: 'work', text: 'Budgets', },
      { url: '/home/users', icon: 'supervisor_account', text: 'Users', },
    ];

    debugs = fixture.debugElement.queryAll(By.css('md-list-item'));
    debugs.forEach((debugElem, index) => {
      element = debugElem.nativeElement;
      expect(element.getAttribute('ng-reflect-router-link')).toEqual(links[index].url);
      expect(element.textContent).toContain(links[index].icon);
      expect(element.textContent).toContain(links[index].text);
    });
  });

  it('should contain welcome text', () => {
    debug = fixture.debugElement.query(By.css('#nav-hero img'));
    element = debug.nativeElement;
    expect(element.getAttribute('src')).toContain('https://scontent.xx.fbcdn.net/_556335564347947011_n.jpg');
    expect(element.getAttribute('alt')).toEqual('Nir Galon profile image');
  });

  it('should contain the user name', () => {
    debug = fixture.debugElement.query(By.css('#nav-hero h2'));
    element = debug.nativeElement;
    expect(element.textContent).toEqual('Nir Galon');
  });
});
