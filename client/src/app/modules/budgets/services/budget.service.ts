import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import { Budget } from '../models/budget';

@Injectable()
export class BudgetService {

  constructor(
    private http: Http,
  ) { }

  private appendToken(): RequestOptions {
    const headers = new Headers();
    headers.append('token', localStorage.getItem('userToken'));
    return new RequestOptions({ headers: headers });
  }

  getBudgets(): Observable<Budget[]> {
    const options = this.appendToken();

    return this.http.get(`/api/budget`, options)
      .map(res => res.json())
      .do(data => console.log(data))
      .catch(this.handleError);
  }

  private handleError(error: Response) {
    return Observable.throw(error.json().error || 'Server error');
  }
}
