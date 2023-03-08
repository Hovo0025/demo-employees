import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TableColumnsSelectComponent } from '@shared/modules/table-columns-select/components/table-columns-select/table-columns-select.component';
import { MaterialModule } from '@core/material/material.module';

@NgModule({
  imports: [CommonModule, MaterialModule],
  declarations: [TableColumnsSelectComponent],
  exports: [TableColumnsSelectComponent],
})
export class TableColumnsSelectModule {}
