import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';

import * as fromRoot from '../../reducers';
import * as userAction from '../../actions/user';
import { User } from '../../models/user';

@Component({
  selector: 'exp-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainComponent implements OnInit {
  public user$: User;

  constructor(
    private store: Store<fromRoot.State>,
    private router: Router,
  ) {
    store.select(fromRoot.getUserState).subscribe(
      res => this.user$ = res
    );
  }

  ngOnInit() {
    this.store.dispatch(new userAction.LoadUserAction());
  }

  logout() {
    localStorage.removeItem('userToken');
    this.router.navigateByUrl('/login');
  }
}
