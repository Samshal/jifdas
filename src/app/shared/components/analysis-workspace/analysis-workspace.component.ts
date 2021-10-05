import { Component, OnInit, Input, ElementRef, ViewChild } from '@angular/core';

import * as DocumentEditor from '../../../../assets/js/ckeditor5/build/ckeditor.js';

import { ServerRequestService } from '../../services/server-request.service';
import { EventsService } from '../../services/events.service';
import { StorageService } from '../../services/storage.service';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-analysis-workspace',
  templateUrl: './analysis-workspace.component.html',
  styleUrls: ['./analysis-workspace.component.css']
})
export class AnalysisWorkspaceComponent implements OnInit {
  @Input() analysisData;
  // @ViewChild('content', { static: true }) modalTemplate: ElementRef;

  analysisText: any;
  analysisTitle: any = "";
  relatedAnalysis: any = [];

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

    this.config = {
        placeholder: 'Type your analysis here!',
        toolbar: DocumentEditor.builtinPlugins.map( plugin => plugin.pluginName ),
        // mention: {
        //   feeds: [
        //     {
        //       marker: '#',
        //       feed: searchString => {
        //         return this.selectedIncidents
        //               .filter(
        //                 analysis => {
        //                   return analysis.includes(searchString);
        //                 }
        //               )
        //               .slice(0, 10)
        //               .map(analysis => "#"+analysis);
        //       }
        //     }
        //   ]
        // }
    }

  }

  ngAfterViewInit() {
  }

  public onReady( editor ) {
      editor.ui.getEditableElement().parentElement.insertBefore(
          editor.ui.view.toolbar.element,
          editor.ui.getEditableElement()
      );
  }
}
