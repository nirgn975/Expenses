import 'hammerjs';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { MaterialModule } from '@angular/material';

import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let debugs: DebugElement[];
  let debug: DebugElement;
  let element: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ MaterialModule ],
      declarations: [ LoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain welcome text', () => {
    debug = fixture.debugElement.query(By.css('md-card-title'));
    element = debug.nativeElement;
    expect(element.textContent).toContain('Welcome to Expenses!');
  });

  it('should have the proper login links', () => {
    const links = [
      { url: '/api/auth/facebook', className: 'button facebook', },
      { url: '/api/auth/twitter', className: 'button twitter', },
      { url: '/api/auth/google', className: 'button google-plus', },
      { url: '/api/auth/github', className: 'button github', },
    ];

    debugs = fixture.debugElement.queryAll(By.css('a'));
    debugs.forEach((link, index) => {
      element = link.nativeElement;
      expect(element.getAttribute('href')).toEqual(links[index].url);
      expect(element.getAttribute('class')).toEqual(links[index].className);
    });
  });
});
