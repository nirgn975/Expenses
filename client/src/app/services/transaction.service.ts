import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import { Transaction } from '../models/transaction';
import { TransactionMonth } from '../models/transaction-month';

@Injectable()
export class TransactionService {

  constructor(
    private http: Http,
  ) { }

  getTransactions(): Observable<Transaction[]> {
    return this.http.get('/api/transaction')
      .map(res => res.json())
      .do(data => console.log(data))
      .catch(this.handleError);
  }

  getTransactionsMonth(): Observable<TransactionMonth[]> {
    return this.http.get('/api/transaction/all-months')
      .map(res => res.json())
      .do(data => console.log(data))
      .catch(this.handleError);
  }

  private handleError(error: Response) {
    return Observable.throw(error.json().error || 'Server error');
  }
}
