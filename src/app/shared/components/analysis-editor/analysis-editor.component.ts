import { Component, OnInit, Input, ElementRef, ViewChild } from '@angular/core';


// import * as DocumentEditor from '@ckeditor/ckeditor5-build-decoupled-document';
import * as DocumentEditor from '../../../../assets/js/ckeditor5/build/ckeditor.js';

import { ServerRequestService } from '../../services/server-request.service';
import { EventsService } from '../../services/events.service';
import { StorageService } from '../../services/storage.service';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { Base64 } from 'js-base64';

@Component({
  selector: 'app-analysis-editor',
  templateUrl: './analysis-editor.component.html',
  styleUrls: ['./analysis-editor.component.css']
})
export class AnalysisEditorComponent implements OnInit {
  @Input() incidentData;
  @ViewChild('content', { static: true }) modalTemplate: ElementRef;
  
  selectedIncidents = [];
  analysisText: any;
  analysisTitle: any = "";
  classificationTypes: any = [];
  relatedIncidents: any = [];
  relatedIncidentData: any;

  analysisClassification: any;

  userId: any;

  modalRef: any;

  public Editor: any = DocumentEditor;
  public config = {};

  constructor(private events: EventsService, private serverRequest: ServerRequestService, private modalService: NgbModal,  private storage: StorageService) { }

  ngOnInit(): void {
    this.storage.getItem("sessionInfo").subscribe((data)=> {
      data = JSON.parse(data);
      this.userId = data.userId;
    });

    console.log(DocumentEditor.builtinPlugins);

    this.config = {
        placeholder: 'Type your analysis here!',
        toolbar: DocumentEditor.builtinPlugins.map( plugin => plugin.pluginName ),
        mention: {
          feeds: [
            {
              marker: '#',
              feed: searchString => {
                return this.selectedIncidents
                      .filter(
                        incident => {
                          return incident.includes(searchString);
                        }
                      )
                      .slice(0, 10)
                      .map(incident => "#"+incident);
              }
            }
          ]
        }
    }

    this.loadAnalysisClassifications();

    this.events.getEvent('incident-data-selected').subscribe((data) => {
      this.selectedIncidents = [];
      for (let key in data){
        if (data[key] == true){
          this.selectedIncidents.push(key);
        }
      }
      if (this.selectedIncidents.length > 0){
      }
    });

    this.events.getEvent('save-current-analysis').subscribe((data) => {
      if (data != null){
        this.openConfirmModal();
      }
    });

  }

  ngAfterViewInit() {
  }

  loadAnalysisClassifications(): void {
    this.serverRequest
      .get("general-analysis/analysis/view-classifications")
      .subscribe(res => {
        this.classificationTypes = res.contentData;
      });
  }

  public onReady( editor ) {
      editor.ui.getEditableElement().parentElement.insertBefore(
          editor.ui.view.toolbar.element,
          editor.ui.getEditableElement()
      );
  }

  public viewAnalysis(): any {
  }

  public openConfirmModal(): any {
    $(this.analysisText).find("*[data-mention]").each((i, el) => {
      this.relatedIncidents.push($(el).attr("data-mention").replace("#", ""))
    })

    if (this.relatedIncidents.length > 0){
      this.serverRequest
      .post("incidents/incident/view-multi-incidents-by-id", {incidents: this.relatedIncidents})
      .subscribe(res => {
        this.relatedIncidentData = res.contentData;
      });
    }

    this.modalRef = this.modalService.open(this.modalTemplate, {backdropClass: 'modal-backdrop', size: 'sm', scrollable: true});
  }

  public saveAnalysis(): any {
    let data = {
      classification: this.analysisClassification,
      text: Base64.encode(this.analysisText),
      userId: this.userId,
      relatedIncidents: this.relatedIncidents
    };

    this.serverRequest
      .post("general-analysis/analysis/new-analysis", data)
      .subscribe(res => {
        this.analysisText = "";
        this.modalRef.close();
      });
  }

}
