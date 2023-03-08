import { ChangeDetectionStrategy, Component } from '@angular/core';

import { MenuItem } from './interfaces';

@Component({
  selector: 'demo-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainLayoutComponent {
  loading = false;
  isSidenavOpened = false;
  navbarRoute: MenuItem[] = [
    {
      icon: '',
      label: 'Employee',
      routeLink: 'employee',
      routerLinkActiveOptions: {
        queryParams: 'subset',
        matrixParams: 'subset',
        paths: 'subset',
        fragment: 'exact',
      },
    },
    {
      icon: '',
      label: 'Profile',
      routeLink: 'profile',
    },
  ];

  constructor() {}

  onTriggerSidenav(): void {
    this.isSidenavOpened = !this.isSidenavOpened;
  }
}
