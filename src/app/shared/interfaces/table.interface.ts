export interface TableColumnI {
  key: string;
  label: string;
  hide?: boolean;
}
export interface TableActionI {
  key: string;
  tooltip: string;
  icon: string;
}

export interface RowActionI<T = any> {
  key: string;
  row: T;
}
