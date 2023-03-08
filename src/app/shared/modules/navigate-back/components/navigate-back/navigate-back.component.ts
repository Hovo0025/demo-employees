import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'demo-navigate-back',
  templateUrl: './navigate-back.component.html',
  styleUrls: ['./navigate-back.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavigateBackComponent {
  constructor(private readonly router: Router) {}

  back(): void {
    this.router.navigate(['../']);
  }
}
