/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { ExpComponent } from './exp.component';

describe('ExpComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
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

  it(`should have as title 'exp works!'`, async(() => {
    const fixture = TestBed.createComponent(ExpComponent);
    const exp = fixture.debugElement.componentInstance;
    expect(exp.title).toEqual('exp works!');
  }));

  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(ExpComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('exp works!');
  }));
});
