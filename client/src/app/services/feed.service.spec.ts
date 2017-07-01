import { TestBed, inject } from '@angular/core/testing';
import { HttpModule, Http, BaseRequestOptions, Response, ResponseOptions } from '@angular/http';
import { MockBackend } from '@angular/http/testing';

import { FeedService } from './feed.service';

describe('FeedService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
      providers: [
        FeedService,
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

  it('should create', inject([FeedService], (service: FeedService) => {
    expect(service).toBeTruthy();
  }));

  it('should GET the feed',
  inject([FeedService, MockBackend], (service: FeedService, mockBackend: MockBackend) => {
    const date = new Date();
    const mockResponse = [{
      '_id': 'a1b2c3',
      '__v': 0,
      'date': date,
      'messageTitle': 'This is the message title',
      'messageBody': 'This is the message body',
      'user': {
        '_id': 'zaq123',
        '__v': 0,
        'name': 'Nir Galon',
      },
    }];

    mockBackend.connections.subscribe((connection) => {
      connection.mockRespond(new Response(new ResponseOptions({
        body: JSON.stringify(mockResponse)
      })));
    });

    service.getFeed().subscribe(feedInfo => {
      expect(feedInfo[0]._id).toEqual('a1b2c3');
      expect(feedInfo[0].messageTitle).toEqual('This is the message title');
      expect(feedInfo[0].messageBody).toEqual('This is the message body');
      expect(feedInfo[0].user.name).toEqual('Nir Galon');
    });
  }));
});
