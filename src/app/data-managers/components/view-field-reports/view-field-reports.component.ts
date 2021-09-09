import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Subject } from 'rxjs';
import { DataTableDirective } from 'angular-datatables';

import { ServerRequestService } from '../../../shared/services/server-request.service';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-view-field-reports',
  templateUrl: './view-field-reports.component.html',
  styleUrls: ['./view-field-reports.component.css']
})
export class ViewFieldReportsComponent implements AfterViewInit, OnDestroy, OnInit {
  globalDateRange = {startDate:"", endDate:""};

  currentData: any = [
  ];

  currentView: any = {};

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
      .get("incidents/incident/view-raw-data?length="+length+"&start="+start+"&search="+search+"&startDate="+sDate+"&endDate="+eDate)
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


  constructor(private serverRequest: ServerRequestService, private modalService: NgbModal) { }

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

  openIncident(incident, content): void {
    this.currentView = incident;
    this.modalService.open(content, {backdropClass: 'modal-backdrop', size: 'xl', scrollable: true});
  }

}
