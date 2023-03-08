import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeListComponent } from './pages/employee-list/employee-list.component';
import { EmployeeRoutingModule } from './employee-routing.module';
import { TableModule } from '@shared/modules/table/table.module';
import { MaterialModule } from '@core/material/material.module';
import { CreateEmployeeComponent } from '@modules/employee/pages/create-employee/create-employee.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NavigateBackModule } from '@shared/modules/navigate-back/navigate-back.module';
import { CustomFromControlsModule } from '@shared/modules/custom-from-controls/custom-from-controls.module';
import { SpinnerModule } from '@shared/modules/spinner/spinner.module';

@NgModule({
  imports: [
    CommonModule,
    EmployeeRoutingModule,
    TableModule,
    MaterialModule,
    ReactiveFormsModule,
    NavigateBackModule,
    CustomFromControlsModule,
    SpinnerModule,
  ],
  providers: [],
  declarations: [EmployeeListComponent, CreateEmployeeComponent],
})
export class EmployeeModule {}
