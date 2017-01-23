import { Component } from '@angular/core';
import { MdSidenavContainer, MdSidenav } from '@angular/material/sidenav';
import { MdIcon } from '@angular/material/icon';
import { MdMenu } from '@angular/material/menu';
import { MdToolbar } from '@angular/material/toolbar';

@Component({
  selector: 'exp-root',
  templateUrl: './exp.component.html',
  styleUrls: ['./exp.component.scss']
})
export class ExpComponent {
  title = 'exp works!';
}
