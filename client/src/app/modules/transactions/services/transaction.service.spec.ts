/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { TransactionService } from './transaction.service';
import { HttpModule, Http, BaseRequestOptions, Response, ResponseOptions } from '@angular/http';
import { MockBackend } from '@angular/http/testing';

describe('TransactionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
      providers: [
        TransactionService,
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

  it('should create the service', inject([TransactionService], (service: TransactionService) => {
    expect(service).toBeTruthy();
  }));

  it('should GET all the transactions for the current month',
    inject([TransactionService, MockBackend], (service: TransactionService, mockBackend: MockBackend) => {
      const mockResponse = [{
        '_id': '5891ce58165eb62d2b84760f',
        'amount': 23,
        'date': '2017-02-01T12:02:32.607Z',
        'type': 'expense',
        'description': 'description foo bar 1',
        'category': '5891ce58165eb62d2b847606',
        '__v': 0,
        'coordinates': [
          21,
          22
        ]
      }, {
        '_id': '5891ce58165eb62d2b847610',
        'amount': 54,
        'date': '2017-02-01T12:02:32.607Z',
        'type': 'income',
        'description': 'description foo bar 2',
        'category': '5891ce58165eb62d2b847607',
        '__v': 0,
        'coordinates': [
          21,
          42
        ]
      }];

      const time = {
        _id: {
          month: 2,
          year: 2017,
        },
      };

      mockBackend.connections.subscribe((connection) => {
        connection.mockRespond(new Response(new ResponseOptions({
          body: JSON.stringify(mockResponse)
        })));
      });

      service.getTransactionsByDate(time).subscribe(transactions => {
        expect(transactions.length).toEqual(2);
        expect(transactions[0].amount).toEqual(23);
        expect(transactions[0].type).toEqual('expense');
        expect(transactions[1].amount).toEqual(54);
        expect(transactions[1].type).toEqual('income');
      });
  }));

  it('should GET all the months where there are transactions',
    inject([TransactionService, MockBackend], (service: TransactionService, mockBackend: MockBackend) => {
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

      service.getTransactionsMonth().subscribe(transactionMonths => {
        expect(transactionMonths.length).toEqual(2);
        expect(transactionMonths[0]._id.month).toEqual(3);
        expect(transactionMonths[0]._id.year).toEqual(2017);
        expect(transactionMonths[1]._id.month).toEqual(2);
        expect(transactionMonths[1]._id.year).toEqual(2017);
      });
    }));
});
