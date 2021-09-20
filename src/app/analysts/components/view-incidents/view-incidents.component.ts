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

  currentData: any = [
  ];

  currentView: any = {};
  forReview: any = false;
  forDecline: any = false;

  incidentLoaded: any = false;

  modalRef: any;

  @ViewChild(DataTableDirective, {static: false})
  dtElement;

  dtOptions: any  = {
    paging: false,
    lengthChange: false,
    pagingType: 'full_numbers',
    pageLength: 100,
    serverSide: true,
    processing: true,
    ajax: (dataTablesParameters: any, callback) => {
      const length = dataTablesParameters.length;
      const search = dataTablesParameters.search.value;
      const start = dataTablesParameters.start;
      const sDate = this.globalDateRange.startDate;
      const eDate = this.globalDateRange.endDate;

      this.serverRequest
      .get("incidents/incident/view-incidents?length="+length+"&start="+start+"&search="+search+"&startDate="+sDate+"&endDate="+eDate)
      .subscribe(res => {
        this.currentData = [];
        this.currentData = res.contentData.data;

        callback({
          recordsTotal: res.contentData.recordsTotal,
          recordsFiltered: res.contentData.recordsFiltered,
          data:[]
        })
      });
    }
  };

  dtTrigger: Subject<any> = new Subject<any>();


  constructor(private serverRequest: ServerRequestService, private modalService: NgbModal, private events: EventsService) { }

  ngOnInit(): void {
    this.dtTrigger.next();
    setTimeout(()=>{
      this.rerender();
    }, 500);
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
}
