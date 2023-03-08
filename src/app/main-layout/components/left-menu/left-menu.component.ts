import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { MenuItem } from '../../interfaces';

@Component({
  selector: 'demo-left-menu',
  templateUrl: './left-menu.component.html',
  styleUrls: ['./left-menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LeftMenuComponent {
  @Input() routes: MenuItem[] = [];

  constructor() {}
}
