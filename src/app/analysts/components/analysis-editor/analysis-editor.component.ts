import { Component, OnInit, Input } from '@angular/core';


import * as DocumentEditor from '@ckeditor/ckeditor5-build-decoupled-document';

@Component({
  selector: 'app-analysis-editor',
  templateUrl: './analysis-editor.component.html',
  styleUrls: ['./analysis-editor.component.css']
})
export class AnalysisEditorComponent implements OnInit {
  @Input() incidentData;
  
  public Editor: any = DocumentEditor;
  public config = {
      placeholder: 'Type your analysis here!'
  }

  constructor() { }

  ngOnInit(): void {
  }

  public onReady( editor ) {
      editor.ui.getEditableElement().parentElement.insertBefore(
          editor.ui.view.toolbar.element,
          editor.ui.getEditableElement()
      );
  }

}
