import { Component, OnInit } from '@angular/core';

import { EChartsOption } from 'echarts';

import { ServerRequestService } from '../../../shared/services/server-request.service';
import { StorageService } from '../../../shared/services/storage.service';
import { EventsService } from '../../../shared/services/events.service';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css']
})
export class ChartsComponent implements OnInit {

  constructor(private serverRequest: ServerRequestService, private storage: StorageService, private events: EventsService) { }

  ngOnInit(): void {
    this.loadIncidencesByRegionData();
  }

  categoriesData;
  trendsData;
  regions: any = [
  ];
  globalDateRange: any = {
    startDate: '',
    endDate: ''
  };

  loadIncidencesByRegionData():void {
    const sDate = this.globalDateRange.startDate;
    const eDate = this.globalDateRange.endDate;   
    this.serverRequest
    .get("incidents/stats/load-incidences-by-region?startDate="+sDate+"&endDate="+eDate)
    .subscribe(response => {
      const data = response.contentData;
      this.categoriesData = data["types"]["categories"];
      this.trendsData = data["trends"]["categories"];

      this.regions = Object.keys(this.categoriesData);
    })
  }

  stringify(data: any): any {
    return JSON.stringify(data);
  }

}
