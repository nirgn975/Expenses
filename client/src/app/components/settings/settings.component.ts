import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'exp-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SettingsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
