import { Injectable } from '@angular/core';
import { CanDeactivate, UrlTree } from '@angular/router';
import { Observable, of } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { SaveDataInterface } from '@core/interfaces';
import { ConfirmDialogComponent } from '@shared/modules/confirm-dialog/components/confirm-dialog.component';

@Injectable()
export class FormGuard implements CanDeactivate<SaveDataInterface> {
  constructor(private readonly dialog: MatDialog) {}
  canDeactivate(
    component: SaveDataInterface
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (component.isDataSaved()) {
      const dialogRef = this.dialog.open(ConfirmDialogComponent);
      return dialogRef.afterClosed();
    }
    return of(true);
  }
}
