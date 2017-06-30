import { TestBed, inject } from '@angular/core/testing';
import { HttpModule, Http, BaseRequestOptions, Response, ResponseOptions } from '@angular/http';
import { MockBackend } from '@angular/http/testing';

import { UserService } from './user.service';

describe('UserService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
      providers: [
        UserService,
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

  it('should create', inject([UserService], (service: UserService) => {
    expect(service).toBeTruthy();
  }));

  it('should GET all the months where there are transactions',
  inject([UserService, MockBackend], (service: UserService, mockBackend: MockBackend) => {
    const mockResponse = {
      '_id': 'a1b2c3',
      '__v': 0,
      'email': 'nir@galon.io',
      'token': '12345',
      'name': 'Nir Galon',
    };

    mockBackend.connections.subscribe((connection) => {
      connection.mockRespond(new Response(new ResponseOptions({
        body: JSON.stringify(mockResponse)
      })));
    });

    service.getOwenrInfo().subscribe(userInfo => {
      expect(userInfo._id).toEqual('a1b2c3');
      expect(userInfo.email).toEqual('nir@galon.io');
      expect(userInfo.token).toEqual('12345');
      expect(userInfo.name).toEqual('Nir Galon');
    });
  }));
});
