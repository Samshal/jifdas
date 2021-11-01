import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Subject } from 'rxjs';
import { DataTableDirective } from 'angular-datatables';

import { ServerRequestService } from '../../services/server-request.service';
import { EventsService } from '../../services/events.service';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-view-analysis',
  templateUrl: './view-analysis.component.html',
  styleUrls: ['./view-analysis.component.css']
})
export class ViewAnalysisComponent implements AfterViewInit, OnDestroy, OnInit {
  globalDateRange = {startDate:"", endDate:""};

  performGlobalSearch: any = false;
  searchParams: any = {
    type: 'basic',
    keyword: '',
    analysisType: '',
    location: ''
  };

  currentData: any = [
  ];

  currentView: any = {};
  forReview: any = false;
  forDecline: any = false;

  analysisLoaded: any = false;

  selectedanalysiss: any = {};
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
      let analysisType = 0;
      let location = "";

      if (this.performGlobalSearch){
        search = this.searchParams.keyword;
        analysisType = this.searchParams.analysisType;
        location = this.searchParams.location;
        if (this.searchParams.dateRange.startDate != ""){
          sDate = this.searchParams.dateRange.startDate.format("YYYY-MM-DD");
          eDate = this.searchParams.dateRange.endDate.format("YYYY-MM-DD");
        }
      }

      this.serverRequest
      .get("general-analysis/analysis/view-analysis?length="+length+"&start="+start+"&search="+search+"&startDate="+sDate+"&endDate="+eDate+"&analysisType="+analysisType+"&location="+location)
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
        targets:   0
    }],
    order: [[1, 'asc']]
  };

  dtTrigger: Subject<any> = new Subject<any>();


  constructor(private serverRequest: ServerRequestService, private modalService: NgbModal, private events: EventsService) { }

  ngOnInit(): void {
    this.dtTrigger.next();
    setTimeout(()=>{
      this.rerender();
    }, 500);

    this.events.getEvent('perform-global-search').subscribe((data) => {
      console.log(data)
      if (data !== null && data.type != "") {
        this.searchParams = data;
        this.performGlobalSearch = true;

        this.groupSelect = false;

        setTimeout(()=>{
          this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
            dtInstance.ajax.reload();
          });
        }, 800);
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

  openAnalysis(analysis): void {
    this.forReview = false;
    this.forDecline = false;
    this.currentView = analysis;
    this.analysisLoaded = true;

  }

  openEditor(content): void {
    this.modalService.open(content, {backdropClass: 'modal-backdrop', size: 'vw', scrollable: true});
  }

  broadcastanalysisSelect(): void {
    this.events.broadcast('analysis-data-selected', this.selectedanalysiss);
  }

  selectAllanalysiss(): void {
    for (let key in this.currentData){
      const data = this.currentData[key];
      this.selectedanalysiss[data.analysisId] = this.groupSelect;

      this.broadcastanalysisSelect();
    }
  }

  preprocess(text: any){
    return text.replace("h1", "p");
  }
}
