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

import { HorizontalTimelineComponent } from './components/horizontal-timeline/horizontal-timeline.component';
import { IncidenceTimelineComponent } from './components/incidence-timeline/incidence-timeline.component';

import { NgxEchartsModule } from 'ngx-echarts';

import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { LeafletDrawModule } from '@asymmetrik/ngx-leaflet-draw';
import { IncidenceMapComponent } from './components/incidence-map/incidence-map.component';

@NgModule({
  declarations: [
    ShellComponent,
    ViewFieldReportsComponent,
    ViewSingleFieldReportComponent,
    EditFieldReportComponent,
    DeclineFieldReportComponent,
    ChartsComponent,
    HorizontalTimelineComponent,
    IncidenceTimelineComponent,
    IncidenceMapComponent
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
    VizComponentsModule,
    LeafletModule,
    LeafletDrawModule
  ],
  exports: [
    ViewSingleFieldReportComponent
  ]
})
export class DataManagersModule { }
