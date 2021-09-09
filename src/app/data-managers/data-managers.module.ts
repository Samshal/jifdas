import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';

import { DataTablesModule } from "angular-datatables";

import { DataManagersRoutingModule } from './data-managers-routing.module';
import { ShellComponent } from './components/shell/shell.component';
import { ViewFieldReportsComponent } from './components/view-field-reports/view-field-reports.component';


@NgModule({
  declarations: [
    ShellComponent,
    ViewFieldReportsComponent
  ],
  imports: [
    CommonModule,
    DataManagersRoutingModule,
    SharedModule,
    DataTablesModule
  ]
})
export class DataManagersModule { }
