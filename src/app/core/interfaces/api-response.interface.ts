export interface ApiResponseInterface<T> {
  body: T[] | null;
  totalCount: string | number;
}
