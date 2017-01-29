import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'exp-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {

  constructor(
    private router: Router,
  ) { }

  logout() {
    localStorage.removeItem('userToken');
    this.router.navigateByUrl('/login');
  }
}
