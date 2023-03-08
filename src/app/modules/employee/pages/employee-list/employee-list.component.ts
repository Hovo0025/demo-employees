import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { PageEvent } from '@angular/material/paginator';
import {
  BehaviorSubject,
  finalize,
  Observable,
  Subject,
  switchMap,
  combineLatest,
  takeUntil,
  tap,
} from 'rxjs';

import { EmployeeApiService } from '@core/api-services/employee-api.service';
import { ApiResponseInterface, QueryParamsI } from '@core/interfaces';
import { RowActionI, TableActionI, TableColumnI } from '@shared/interfaces';
import { EmployeeItemI } from '@modules/employee/interfaces';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from '@shared/modules/confirm-dialog/components/confirm-dialog.component';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmployeeListComponent implements OnInit, OnDestroy {
  public employees$!: Observable<ApiResponseInterface<EmployeeItemI>>;
  public isLoading$ = new BehaviorSubject<boolean>(true);
  readonly columns$ = new BehaviorSubject<TableColumnI[]>([]);
  readonly actions$ = new BehaviorSubject<TableActionI[]>([]);
  readonly filterValue$ = new BehaviorSubject<QueryParamsI>({
    page: 0,
    size: 10,
  });
  readonly refresh$ = new BehaviorSubject<boolean>(false);
  readonly totalItems$ = new BehaviorSubject<number>(0);
  private readonly destroy$ = new Subject<void>();

  constructor(
    private readonly router: Router,
    private readonly activatedRoute: ActivatedRoute,
    private readonly employeeApiService: EmployeeApiService,
    private readonly dialog: MatDialog,
    private readonly toastr: ToastrService
  ) {
    this.activatedRoute.queryParams.pipe(takeUntil(this.destroy$)).subscribe((params: Params) => {
      const queryParams = { page: +params['page'] || 0, size: +params['size'] || 10 };
      this.filterValue$.next(queryParams);
    });
  }

  ngOnInit(): void {
    this.onGetEmployees();
    this.initTable();
  }

  private onGetEmployees(): void {
    this.employees$ = combineLatest([this.filterValue$]).pipe(
      tap(() => this.isLoading$.next(true)),
      switchMap(([filters]) =>
        this.employeeApiService
          .getEmployees(filters)
          .pipe(finalize(() => this.isLoading$.next(false)))
      )
    );
  }

  private initTable() {
    this.columns$.next([
      {
        key: 'firstName',
        label: 'First Name',
      },
      {
        key: 'lastName',
        label: 'Last Name',
      },
      {
        key: 'company',
        label: 'Company name',
      },
      {
        key: 'email',
        label: 'User email',
      },
      {
        key: 'phone',
        label: 'Phone',
      },
    ]);

    this.actions$.next([
      {
        key: 'edit',
        icon: 'edit',
        tooltip: 'Edit employee',
      },
      {
        key: 'delete',
        icon: 'delete',
        tooltip: 'Delete employee',
      },
    ]);
  }

  onRowAction(action: RowActionI): void {
    switch (action.key) {
      case 'delete':
        this.confirmDelete(action.row.id);
        break;
      case 'edit':
        // TODO edit employee
        break;
    }
  }

  confirmDelete(id: string): void {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: { text: `Employee with <b>ID: ${id}</b> will be removed!` },
    });
    dialogRef
      .afterClosed()
      .pipe(takeUntil(this.destroy$))
      .subscribe((confirmed) => {
        if (confirmed) {
          this.onDeleteEmployee(id);
        }
      });
  }

  onDeleteEmployee(id: string): void {
    this.employeeApiService.deleteEmployee(id).subscribe(() => {
      this.refresh$.next(true);
      this.toastr.success('Employee removed!');
    });
  }

  onPageChange(event: PageEvent): void {
    const params = {
      page: event.pageIndex,
      size: event.pageSize,
    };
    this.router.navigate(['.'], {
      relativeTo: this.activatedRoute,
      queryParams: params,
      queryParamsHandling: 'merge',
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
