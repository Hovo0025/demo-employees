import { AbstractControl } from '@angular/forms';

export class CustomValidators {
  static emailValidator(control: AbstractControl): null | { invalidEmail: true } {
    if (!control.value) return null;

    return control.value.match(/^[a-zA-Z\d._%+-]+@[a-zA-Z\d.-]+\.[a-z]{2,5}$/) ? null : { invalidEmail: true };
  }
}
