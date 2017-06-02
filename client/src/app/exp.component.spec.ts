import { TestBed, async } from '@angular/core/testing';
import { MaterialModule } from '@angular/material';
import { RouterTestingModule } from '@angular/router/testing';

import { ExpComponent } from './exp.component';

describe('ExpComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ExpComponent
      ],
      imports: [
        MaterialModule,
        RouterTestingModule,
      ],
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(ExpComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
