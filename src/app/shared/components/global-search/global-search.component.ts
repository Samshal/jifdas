import { Component, OnInit } from '@angular/core';
import {Observable, of, OperatorFunction} from 'rxjs';
import {catchError, debounceTime, distinctUntilChanged, map, tap, switchMap, mergeMap} from 'rxjs/operators';

import { ServerRequestService } from '../../services/server-request.service';
import { StorageService } from '../../services/storage.service';
import { EventsService } from '../../services/events.service';

import * as moment from 'moment';

@Component({
  selector: 'app-global-search',
  templateUrl: './global-search.component.html',
  styleUrls: ['./global-search.component.css']
})
export class GlobalSearchComponent implements OnInit {
  searchParams: any = {
    type: '',
    keyword: '',
    incidentType: '',
    location: '',
    dateRange: { startDate: '', endDate: ''}
  };

  ranges: any = {
    'Today': [moment(), moment()],
    'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
    'Last 7 Days': [moment().subtract(6, 'days'), moment()],
    'Last 30 Days': [moment().subtract(29, 'days'), moment()],
    'This Month': [moment().startOf('month'), moment().endOf('month')],
    'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')],
    'One Year Ago': [moment().subtract(1, 'year'), moment()]
  }

  incidentTypeList: any = [];
  constructor(private serverRequest: ServerRequestService, private storage: StorageService, private events: EventsService) {
    this.loadIncidentTypes();
  }

  ngOnInit(): void {
  }

  loadIncidentTypes(): void {
    this.serverRequest.get("incidents/incident-type/view-incident-types?resourceId=1").subscribe(res => {
      this.incidentTypeList = [];
      (res.contentData).forEach(data => {
        this.incidentTypeList.push({
          "id":data.IncidentTypeId,
          "text":data.IncidentTypeName,
        })
      })
    });       
  }

  broadcastSearchRequest(): any {
    this.searchParams.type = "basic";
    this.events.broadcast('perform-global-search', this.searchParams);
  }

  changed(evt: any): any {
    if (typeof this.searchParams.dateRange != "undefined" && this.searchParams.dateRange.endDate !== null){
      this.broadcastSearchRequest();
    }
  }

}
