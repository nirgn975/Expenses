import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import { Feed } from '../models/feed';

@Injectable()
export class FeedService {

  constructor(
    private http: Http,
  ) { }

  private appendToken(): RequestOptions {
    const headers = new Headers();
    headers.append('token', localStorage.getItem('userToken'));
    return new RequestOptions({ headers: headers });
  }

  getFeed(): Observable<Feed[]> {
    const options = this.appendToken();

    return this.http.get('/api/feed', options)
      .map(res => res.json())
      .catch(this.handleError);
  }

  private handleError(error: Response) {
    return Observable.throw(error.json().error || 'Server error');
  }
}
