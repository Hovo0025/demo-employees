import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { delay, EMPTY, Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { createQueryParams, handleResponse } from '@core/helpers/handle-response';
import { ApiResponseInterface, QueryParamsI } from '@core/interfaces';
import { CreateEmployeeReqI, EmployeeItemI } from '@modules/employee/interfaces';
import { EMPLOYEE_API_URL } from '@core/constants/injection-tokens';

@Injectable({
  providedIn: 'root',
})
export class EmployeeApiService {
  constructor(
    private readonly http: HttpClient,
    @Inject(EMPLOYEE_API_URL) readonly employeeApiUrl: string
  ) {}

  getEmployees(params: QueryParamsI): Observable<ApiResponseInterface<EmployeeItemI>> {
    const endpoint = createQueryParams(params);
    return this.http
      .get<EmployeeItemI[]>(`${this.employeeApiUrl}${endpoint}`, { observe: 'response' })
      .pipe(
        delay(800),
        map(handleResponse),
        catchError(() => EMPTY)
      );
  }

  createEmployee(reqData: CreateEmployeeReqI): Observable<EmployeeItemI> {
    return this.http.post<EmployeeItemI>(this.employeeApiUrl, { ...reqData });
  }

  deleteEmployee(id: string): Observable<void> {
    return this.http.delete<void>(`${this.employeeApiUrl}${id}`);
  }
}
