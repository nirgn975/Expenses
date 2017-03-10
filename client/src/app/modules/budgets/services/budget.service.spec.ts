/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { BudgetService } from './budget.service';
import { HttpModule, Http, BaseRequestOptions, Response, ResponseOptions } from '@angular/http';
import { MockBackend } from '@angular/http/testing';

describe('BudgetService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
      providers: [
        BudgetService,
        {
          provide: Http,
          useFactory: (mockBackend, options) => {
            return new Http(mockBackend, options);
          },
          deps: [MockBackend, BaseRequestOptions]
        },
        MockBackend,
        BaseRequestOptions,
      ]
    });
  });

  it('should create the service', inject([BudgetService], (service: BudgetService) => {
    expect(service).toBeTruthy();
  }));

  it('should GET all the budgets for a specific user',
    inject([BudgetService, MockBackend], (service: BudgetService, mockBackend: MockBackend) => {
      const mockResponse = [{
        '_id': {
          'month': 3,
          'year': 2017
        }
      }, {
        '_id': {
          'month': 2,
          'year': 2017
        }
      }];

      mockBackend.connections.subscribe((connection) => {
        connection.mockRespond(new Response(new ResponseOptions({
          body: JSON.stringify(mockResponse)
        })));
      });

      service.getBudgets(12345).subscribe(budgets => {
        expect(budgets.length).toEqual(2);
        expect(budgets[0]._id).toEqual(3);
        expect(budgets[1]._id).toEqual(2017);
      });
    }));
});
