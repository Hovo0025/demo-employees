import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { PageEvent } from '@angular/material/paginator';

import { PAGE_SIZE_OPTIONS } from '@shared/modules/table/table-config';
import { RowActionI, TableActionI, TableColumnI } from '@shared/interfaces';

@Component({
  selector: 'demo-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TableComponent<T> implements OnInit {
  @Input() dataSource: T[] = [];
  @Input() columns: TableColumnI[] = [];
  @Input() actions: TableActionI[] = [];
  @Input() pageIndex = 0;
  @Input() pageSize = 10;
  @Input() totalItems: string | number = 0;
  @Input() routeConstructorName: string = '';
  @Output() pageChange = new EventEmitter<PageEvent>();
  @Output() rowAction: EventEmitter<RowActionI> = new EventEmitter<RowActionI>();

  public PAGE_SIZE_OPTIONS: number[] = PAGE_SIZE_OPTIONS;
  public displayedColumns: string[] = [];
  public columnsForStart: string[] = ['index'];
  public columnsForEnd: string[] = ['actions'];

  ngOnInit(): void {
    this.setDisplayedColumns();
  }

  setDisplayedColumns(): void {
    this.displayedColumns = this.columns.map((el: TableColumnI) => el.key);
  }

  getDisplayedColumns(event: string[]) {
    this.displayedColumns = event;
  }

  public onPageChange(event: PageEvent): void {
    this.pageSize = event.pageSize;
    this.pageIndex = event.pageIndex;
    this.pageChange.emit(event);
  }

  onSelectAction(el: any, action: TableActionI) {
    this.rowAction.emit({ key: action.key, row: el });
  }
}
