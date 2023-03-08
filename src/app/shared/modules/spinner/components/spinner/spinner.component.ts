import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'demo-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SpinnerComponent {}
