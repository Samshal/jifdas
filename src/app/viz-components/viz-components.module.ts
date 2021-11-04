import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgxEchartsModule } from 'ngx-echarts';

import { IncidencesByRegionComponent } from './incidences-by-region/incidences-by-region.component';
import { IncidencesByStateComponent } from './incidences-by-state/incidences-by-state.component';
import { IncidencesByRegionBreakdownComponent } from './incidences-by-region-breakdown/incidences-by-region-breakdown.component';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { PieChartComponent } from './pie-chart/pie-chart.component';
import { CalendarHeatmapComponent } from './calendar-heatmap/calendar-heatmap.component';
import { TimeSeriesComponent } from './time-series/time-series.component';
// import { IncidencesMapComponent } from './incidences-map/incidences-map.component';

@NgModule({
  declarations: [IncidencesByRegionComponent,
   IncidencesByStateComponent, IncidencesByRegionBreakdownComponent, BarChartComponent, PieChartComponent, CalendarHeatmapComponent, TimeSeriesComponent],
  imports: [
    CommonModule,
    NgxEchartsModule.forRoot({
      echarts: () => import('echarts')
    })
  ],
  exports: [
  	IncidencesByRegionComponent,
    IncidencesByStateComponent,
    IncidencesByRegionBreakdownComponent,
    BarChartComponent,
    PieChartComponent,
    CalendarHeatmapComponent,
    TimeSeriesComponent
    // IncidencesMapComponent
  ]
})
export class VizComponentsModule { }
