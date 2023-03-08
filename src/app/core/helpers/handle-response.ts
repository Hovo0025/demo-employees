import { HttpResponse } from '@angular/common/http';

import { ApiResponseInterface, QueryParamsI } from '@core/interfaces';

export const handleResponse = <T>(response: HttpResponse<T[]>): ApiResponseInterface<T> => {
  return { totalCount: response.headers.get('x-total-count') ?? 0, body: response.body };
};

export const createQueryParams = (params: QueryParamsI): string => {
  return `?_page=${params.page}&_limit=${params.size}&_sort=registered&_order=DESC`;
};
