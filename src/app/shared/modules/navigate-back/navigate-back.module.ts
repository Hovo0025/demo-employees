import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '@core/material/material.module';
import { NavigateBackComponent } from '@shared/modules/navigate-back/components/navigate-back/navigate-back.component';

@NgModule({
  imports: [CommonModule, MaterialModule],
  declarations: [NavigateBackComponent],
  exports: [NavigateBackComponent],
})
export class NavigateBackModule {}
