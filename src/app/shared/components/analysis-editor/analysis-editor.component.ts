import { Component, OnInit, Input } from '@angular/core';


// import * as DocumentEditor from '@ckeditor/ckeditor5-build-decoupled-document';
import * as DocumentEditor from '../../../../assets/js/ckeditor5/build/ckeditor.js';
import { EventsService } from '../../services/events.service';


@Component({
  selector: 'app-analysis-editor',
  templateUrl: './analysis-editor.component.html',
  styleUrls: ['./analysis-editor.component.css']
})
export class AnalysisEditorComponent implements OnInit {
  @Input() incidentData;
  
  selectedIncidents = [];
  public Editor: any = DocumentEditor;
  public config = {};

  constructor(private events: EventsService) { }

  ngOnInit(): void {

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



  }

  public onReady( editor ) {
      editor.ui.getEditableElement().parentElement.insertBefore(
          editor.ui.view.toolbar.element,
          editor.ui.getEditableElement()
      );
  }

}
