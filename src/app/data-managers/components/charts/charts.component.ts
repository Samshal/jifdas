import { Component, OnInit } from '@angular/core';

import { EChartsOption } from 'echarts';

import { ServerRequestService } from '../../../shared/services/server-request.service';
import { StorageService } from '../../../shared/services/storage.service';
import { EventsService } from '../../../shared/services/events.service';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css']
})
export class ChartsComponent implements OnInit {

  performGlobalSearch: any = false;
  searchParams: any = {
    type: 'basic',
    keyword: '',
    incidentType: '',
    location: ''
  };

  locationKeyword: any = "";

  searchedLocations: any = {
    country: [],
    state: [],
    lga: [],
    region: []
  };

  constructor(private serverRequest: ServerRequestService, private storage: StorageService, private events: EventsService, private modalService: NgbModal) { }

  ngOnInit(): void {
    this.loadIncidencesByRegionData();

    this.events.getEvent('perform-global-search').subscribe((data) => {
      if (data != null && data.type != "") {
        this.searchParams = data;
        // search = this.searchParams.keyword;
        // incidentType = this.searchParams.incidentType;
        // location = this.searchParams.location;
        if (this.searchParams.dateRange.startDate != ""){
          this.globalDateRange.startDate = this.searchParams.dateRange.startDate.format("YYYY-MM-DD");
          this.globalDateRange.endDate = this.searchParams.dateRange.endDate.format("YYYY-MM-DD");
          this.loadIncidencesByRegionData();
        }
      }
    })
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

  openLocationSearch(content): any {
    this.modalService.open(content, {backdropClass: 'modal-backdrop', size: 'lg', scrollable: true});
  }

  searchLocation(): any {
    this.searchedLocations = {
      country: [],
      state: [],
      lga: [],
      region: []
    }

    this.serverRequest
    .get("incidents/search/location?keyword="+this.locationKeyword)
    .subscribe(response => {
      const resp = response.contentData;
      for (let index in resp){
        const loc = resp[index];
        if (!(this.searchedLocations.country.includes(loc.Country))){
          this.searchedLocations.country.push(loc.Country);
        }
        if (!(this.searchedLocations.region.includes(loc.Region))){
          this.searchedLocations.region.push(loc.Region);
        }
        if (!(this.searchedLocations.state.includes(loc.State))){
          this.searchedLocations.state.push(loc.State);
        }
        if (!(this.searchedLocations.lga.includes(loc.LGA))){
          this.searchedLocations.lga.push(loc.LGA);
        }
      }
    })
  }

}
