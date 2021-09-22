import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Subject } from 'rxjs';
import { DataTableDirective } from 'angular-datatables';

import { ServerRequestService } from '../../../shared/services/server-request.service';
import { EventsService } from '../../../shared/services/events.service';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-view-incidents',
  templateUrl: './view-incidents.component.html',
  styleUrls: ['./view-incidents.component.css']
})
export class ViewIncidentsComponent implements AfterViewInit, OnDestroy, OnInit {
  globalDateRange = {startDate:"", endDate:""};

  performGlobalSearch: any = false;
  searchParams: any = {
    type: 'basic',
    keyword: '',
    incidentType: '',
    location: ''
  };

  currentData: any = [
  ];

  currentView: any = {};
  forReview: any = false;
  forDecline: any = false;

  incidentLoaded: any = false;

  selectedIncidents: any = {};
  groupSelect: any = false;

  modalRef: any;

  @ViewChild(DataTableDirective, {static: false})
  dtElement;

  dtOptions: any  = {
    paging: true,
    lengthChange: true,
    pagingType: 'full_numbers',
    pageLength: 10,
    serverSide: true,
    processing: true,
    ajax: (dataTablesParameters: any, callback) => {
      let length = dataTablesParameters.length;
      let search = dataTablesParameters.search.value;
      let start = dataTablesParameters.start;
      let sDate = this.globalDateRange.startDate;
      let eDate = this.globalDateRange.endDate;
      let incidentType = 0;
      let location = "";

      if (this.performGlobalSearch){
        search = this.searchParams.keyword;
        incidentType = this.searchParams.incidentType;
        location = this.searchParams.location;
        if (this.searchParams.dateRange.startDate != ""){
          sDate = this.searchParams.dateRange.startDate.format("YYYY-MM-DD");
          eDate = this.searchParams.dateRange.endDate.format("YYYY-MM-DD");
        }
      }

      this.serverRequest
      .get("incidents/incident/view-incidents?length="+length+"&start="+start+"&search="+search+"&startDate="+sDate+"&endDate="+eDate+"&incidentType="+incidentType+"&location="+location)
      .subscribe(res => {
        this.performGlobalSearch = false;
        this.currentData = [];
        this.currentData = res.contentData.data;

        callback({
          recordsTotal: res.contentData.recordsTotal,
          recordsFiltered: res.contentData.recordsFiltered,
          data:[]
        })
      });
    },
    columnDefs: [ {
        orderable: false,
        className: 'select-checkbox',
        targets:   4,
        data: null,
        defaultContent: '',
    } ],
    select: {
        style:    'os',
        selector: 'td:last-child'
    },
    order: [[ 0, 'asc' ]]
  };

  dtTrigger: Subject<any> = new Subject<any>();


  constructor(private serverRequest: ServerRequestService, private modalService: NgbModal, private events: EventsService) { }

  ngOnInit(): void {
    this.dtTrigger.next();
    setTimeout(()=>{
      this.rerender();
    }, 500);

    this.events.getEvent('perform-global-search').subscribe((data) => {
      if (data != null && data.type != "") {
        this.searchParams = data;
        this.performGlobalSearch = true;

        this.groupSelect = false;

         setTimeout(()=>{
          this.rerender();
        }, 500);
      }
    })
  }

  ngAfterViewInit(): void {
    this.dtTrigger.next();
  }

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }

  rerender(): void {
    this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
      dtInstance.destroy();
      this.dtTrigger.next();
    });
  }

  openIncident(incident): void {
    this.forReview = false;
    this.forDecline = false;
    this.currentView = incident;
    this.incidentLoaded = true;

  }

  openEditor(content): void {
    this.modalService.open(content, {backdropClass: 'modal-backdrop', size: 'vw', scrollable: true});
  }

  broadcastIncidentSelect(): void {
    this.events.broadcast('incident-data-selected', this.selectedIncidents);
  }

  selectAllIncidents(): void {
    for (let key in this.currentData){
      const data = this.currentData[key];
      this.selectedIncidents[data.IncidentId] = this.groupSelect;

      this.broadcastIncidentSelect();
    }
  }
}
