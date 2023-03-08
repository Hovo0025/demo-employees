import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { InputFormControlComponent } from '@shared/modules/custom-from-controls/components/input-form-control/input-form-control.component';
import { MaterialModule } from '@core/material/material.module';

@NgModule({
  imports: [CommonModule, FormsModule, MaterialModule],
  declarations: [InputFormControlComponent],
  exports: [InputFormControlComponent],
})
export class CustomFromControlsModule {}
