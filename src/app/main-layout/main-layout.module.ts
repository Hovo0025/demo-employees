import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MaterialModule } from '@core/material/material.module';
import { MainLayoutRoutingModule } from './main-layout-routing.module';
import { MainLayoutComponent } from './main-layout.component';
import { HeaderComponent } from './components/header/header.component';
import { LeftMenuComponent } from './components/left-menu/left-menu.component';
import { ConfirmDialogModule } from '@shared/modules/confirm-dialog/confirm-dialog.module';
import { FormGuard } from '@core/guards/form.guard';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MainLayoutRoutingModule,
    MaterialModule,
    ConfirmDialogModule,
  ],
  declarations: [MainLayoutComponent, HeaderComponent, LeftMenuComponent],
  providers: [FormGuard],
})
export class MainLayoutModule {
  constructor() {}
}
