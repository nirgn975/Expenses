/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { MaterialModule } from '@angular/material';
import { RouterTestingModule } from '@angular/router/testing';

import { ExpComponent } from './exp.component';

describe('ExpComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        MaterialModule.forRoot(),
        RouterTestingModule,
      ],
      declarations: [ ExpComponent ],
    });
    TestBed.compileComponents();
  });

  it('should create the exp', async(() => {
    const fixture = TestBed.createComponent(ExpComponent);
    const exp = fixture.debugElement.componentInstance;
    expect(exp).toBeTruthy();
  }));
});
