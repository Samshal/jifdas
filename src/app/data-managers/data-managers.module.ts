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
import { ChartsComponent } from './components/charts/charts.component';

import { VizComponentsModule } from '../viz-components/viz-components.module';

import { NgxEchartsModule } from 'ngx-echarts';

@NgModule({
  declarations: [
    ShellComponent,
    ViewFieldReportsComponent,
    ViewSingleFieldReportComponent,
    EditFieldReportComponent,
    DeclineFieldReportComponent,
    ChartsComponent
  ],
  imports: [
    CommonModule,
    DataManagersRoutingModule,
    SharedModule,
    DataTablesModule,
    NgxEchartsModule.forRoot({
      echarts: () => import('echarts')
    }),
    NgSelect2Module,
    FormsModule,
    VizComponentsModule
  ],
  exports: [
    ViewSingleFieldReportComponent
  ]
})
export class DataManagersModule { }
