import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import { Transaction } from '../models/transaction';
import { TransactionMonth } from '../models/transaction-month';

@Injectable()
export class TransactionService {

  constructor(
    private http: Http,
  ) { }

  _appendToken(): RequestOptions {
    const headers = new Headers();
    headers.append('token', localStorage.getItem('userToken'));
    return new RequestOptions({ headers: headers });
  }

  getTransactionsByDate(time: TransactionMonth): Observable<Transaction[]> {
    const options = this._appendToken();

    return this.http.get(`/api/transaction/${time._id.year}/${time._id.month}`, options)
      .map(res => res.json())
      .catch(this.handleError);
  }

  getTransactionsMonth(): Observable<TransactionMonth[]> {
    const options = this._appendToken();

    return this.http.get('/api/transaction/all-months', options)
      .map(res => res.json())
      .catch(this.handleError);
  }

  private handleError(error: Response) {
    return Observable.throw(error.json().error || 'Server error');
  }
}
