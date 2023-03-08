import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '@core/material/material.module';
import { ConfirmDialogComponent } from '@shared/modules/confirm-dialog/components/confirm-dialog.component';
import { MatDialogRef } from '@angular/material/dialog';

@NgModule({
  imports: [CommonModule, MaterialModule],
  declarations: [ConfirmDialogComponent],
  exports: [ConfirmDialogComponent],
  providers: [
    {
      provide: MatDialogRef,
      useValue: {},
    },
  ],
})
export class ConfirmDialogModule {}
