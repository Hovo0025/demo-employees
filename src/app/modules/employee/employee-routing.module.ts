import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmployeeListComponent } from './pages/employee-list/employee-list.component';
import { CreateEmployeeComponent } from '@modules/employee/pages/create-employee/create-employee.component';
import { FormGuard } from '@core/guards/form.guard';

const routes: Routes = [
  { path: '', component: EmployeeListComponent },
  { path: 'create', canDeactivate: [FormGuard], component: CreateEmployeeComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmployeeRoutingModule {}
