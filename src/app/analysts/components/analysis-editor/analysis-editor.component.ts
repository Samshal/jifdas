import { Component, OnInit } from '@angular/core';


import EditorJS from '@editorjs/editorjs';

@Component({
  selector: 'app-analysis-editor',
  templateUrl: './analysis-editor.component.html',
  styleUrls: ['./analysis-editor.component.css']
})
export class AnalysisEditorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const editor = new EditorJS('editorjs');
  }

}
