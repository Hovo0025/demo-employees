import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SpinnerComponent } from '@shared/modules/spinner/components/spinner/spinner.component';
import { MaterialModule } from '@core/material/material.module';

@NgModule({
  imports: [CommonModule, MaterialModule],
  declarations: [SpinnerComponent],
  exports: [SpinnerComponent],
})
export class SpinnerModule {}
