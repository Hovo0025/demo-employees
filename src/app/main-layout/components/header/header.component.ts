import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'demo-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  @Output() readonly triggerSidenav: EventEmitter<string> = new EventEmitter<string>();

  constructor() {}

  toggleSideNav(): void {
    this.triggerSidenav.emit();
  }
}
