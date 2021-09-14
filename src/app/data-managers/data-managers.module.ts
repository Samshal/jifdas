import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../shared/shared.module';

import { DataTablesModule } from "angular-datatables";

import { DataManagersRoutingModule } from './data-managers-routing.module';

import { NgSelect2Module } from 'ng-select2';

import { ShellComponent } from './components/shell/shell.component';
import { ViewFieldReportsComponent } from './components/view-field-reports/view-field-reports.component';
import { ViewSingleFieldReportComponent } from './components/view-single-field-report/view-single-field-report.component';
import { EditFieldReportComponent } from './components/edit-field-report/edit-field-report.component';
import { DeclineFieldReportComponent } from './components/decline-field-report/decline-field-report.component';


@NgModule({
  declarations: [
    ShellComponent,
    ViewFieldReportsComponent,
    ViewSingleFieldReportComponent,
    EditFieldReportComponent,
    DeclineFieldReportComponent
  ],
  imports: [
    CommonModule,
    DataManagersRoutingModule,
    SharedModule,
    DataTablesModule,
    NgSelect2Module,
    FormsModule
  ]
})
export class DataManagersModule { }
