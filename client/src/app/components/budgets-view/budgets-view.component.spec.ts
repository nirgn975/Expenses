/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { MaterialModule } from '@angular/material';

import { BudgetsViewComponent } from './budgets-view.component';

describe('BudgetsViewComponent', () => {
  let component: BudgetsViewComponent;
  let fixture: ComponentFixture<BudgetsViewComponent>;
  let debug: DebugElement;
  let element: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ MaterialModule.forRoot() ],
      declarations: [ BudgetsViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BudgetsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain text', () => {
    debug = fixture.debugElement.query(By.css('p'));
    element = debug.nativeElement;
    expect(element.textContent).toContain('budgets-view works!');
  });
});
