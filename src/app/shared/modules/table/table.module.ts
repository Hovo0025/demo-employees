import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TableComponent } from '@shared/modules/table/components/table/table.component';
import { MaterialModule } from '@core/material/material.module';
import { TableColumnsSelectModule } from '@shared/modules/table-columns-select/table-columns-select.module';

@NgModule({
  imports: [CommonModule, MaterialModule, TableColumnsSelectModule],
  declarations: [TableComponent],
  exports: [TableComponent],
})
export class TableModule {}
