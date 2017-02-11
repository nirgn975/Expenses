import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import { User } from '../models/user';

@Injectable()
export class UserService {

  constructor(
    private http: Http,
  ) { }

  private appendToken(): RequestOptions {
    const headers = new Headers();
    headers.append('token', localStorage.getItem('userToken'));
    return new RequestOptions({ headers: headers });
  }

  getOwenInfo(): Observable<User> {
    const options = this.appendToken();

    return this.http.get('/api/user/me', options)
      .map(res => res.json())
      .catch(this.handleError);
  }

  private handleError(error: Response) {
    return Observable.throw(error.json().error || 'Server error');
  }

}
