import { Component, OnInit, Input, OnChanges, SimpleChanges, SimpleChange } from '@angular/core';
import { EChartsOption, registerMap } from 'echarts';

import { ServerRequestService } from '../../shared/services/server-request.service';
import { EventsService } from '../../shared/services/events.service';

@Component({
  selector: 'app-calendar-heatmap',
  templateUrl: './calendar-heatmap.component.html',
  styleUrls: ['./calendar-heatmap.component.css']
})
export class CalendarHeatmapComponent implements OnInit {
  chart;
  @Input() categoriesData: any = {};

  constructor() { }

  ngOnInit(): void {
    console.log(this.categoriesData);
  }

}
