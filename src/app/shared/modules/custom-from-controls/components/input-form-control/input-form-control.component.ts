import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'demo-input-form-control',
  templateUrl: './input-form-control.component.html',
  styleUrls: ['./input-form-control.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: InputFormControlComponent,
      multi: true,
    },
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputFormControlComponent implements ControlValueAccessor {
  @Input() label!: string;
  value = false;
  onChange!: (value: boolean) => boolean;
  onTouched!: () => void;

  writeValue(obj: boolean): void {
    this.value = obj;
    console.log('this.value', this.value);
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {}

  onSetValue(): void {
    this.onChange(this.value);
  }
}
