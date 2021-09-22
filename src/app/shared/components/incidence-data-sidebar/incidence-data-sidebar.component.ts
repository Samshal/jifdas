import { Component, OnInit } from '@angular/core';

import { EventsService } from '../../services/events.service';
import { ServerRequestService } from '../../../shared/services/server-request.service';


declare var KTDrawer: any;
declare var KTApp: any;

@Component({
  selector: 'app-incidence-data-sidebar',
  templateUrl: './incidence-data-sidebar.component.html',
  styleUrls: ['./incidence-data-sidebar.component.css']
})
export class IncidenceDataSidebarComponent implements OnInit {

  selectedIncidents: any = [];
  incidentData: any = [];
  constructor(private events: EventsService, private serverRequest: ServerRequestService) { }

  ngOnInit(): void {
    KTDrawer.init();
    KTApp.init();

    this.events.getEvent('incident-data-selected').subscribe((data) => {
      this.selectedIncidents = [];
      for (let key in data){
        if (data[key] == true){
          this.selectedIncidents.push(key);
        }
      }
      if (this.selectedIncidents.length > 0){
        this.loadIncidents();
      }
    })
  }

  loadIncidents(): void {
    const data = {
      "incidents": this.selectedIncidents
    }

    this.serverRequest
      .post("incidents/incident/view-multi-incidents-by-id", data)
      .subscribe(res => {
        this.incidentData = res.contentData;
      });
  }

}
