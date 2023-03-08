import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { CustomValidators } from '@core/helpers/custom-validators';
import { CreateEmployeeReqI } from '@modules/employee/interfaces';
import { EmployeeApiService } from '@core/api-services/employee-api.service';
import { ToastrService } from 'ngx-toastr';
import { SaveDataInterface } from '@core/interfaces';

@Component({
  selector: 'demo-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreateEmployeeComponent implements OnInit, SaveDataInterface {
  createEmployeeForm!: FormGroup;
  constructor(
    private readonly fb: FormBuilder,
    private readonly employeeApiService: EmployeeApiService,
    private readonly toastr: ToastrService,
    private readonly router: Router
  ) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.createEmployeeForm = this.fb.group({
      firstName: [null, [Validators.required]],
      lastName: [null, [Validators.required]],
      gender: [null, [Validators.required]],
      company: [null, []],
      email: [null, [Validators.required, CustomValidators.emailValidator]],
      phone: [null, []],
    });
  }

  onCreateEmployee(): void {
    this.createEmployeeForm.markAllAsTouched();
    if (this.createEmployeeForm.invalid) {
      return;
    }
    const reqData = this.createEmployeeForm.value as CreateEmployeeReqI;
    this.employeeApiService.createEmployee(reqData).subscribe(
      (res) => {
        this.createEmployeeForm.reset();
        this.toastr.success('Employee created successfully');
        this.router.navigate(['../']);
      },
      (err) => {
        this.toastr.error('Something went wrong while creating employee');
      }
    );
  }

  isDataSaved(): boolean {
    return this.createEmployeeForm.dirty;
  }
}
