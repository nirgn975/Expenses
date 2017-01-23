/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { ExpComponent } from './exp.component';
import { MaterialModule } from '@angular/material';

import { TransactionViewComponent } from './components/transaction-view/transaction-view.component';

describe('ExpComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        MaterialModule.forRoot()
      ],
      declarations: [
        TransactionViewComponent,
        ExpComponent
      ],
    });
    TestBed.compileComponents();
  });

  it('should create the exp', async(() => {
    const fixture = TestBed.createComponent(ExpComponent);
    const exp = fixture.debugElement.componentInstance;
    expect(exp).toBeTruthy();
  }));
});
