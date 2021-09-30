import { Component, OnInit, Input, OnChanges, SimpleChanges, SimpleChange} from '@angular/core';
import  * as L from 'leaflet'; 

@Component({
  selector: 'app-view-single-analysis',
  templateUrl: './view-single-analysis.component.html',
  styleUrls: ['./view-single-analysis.component.css']
})
export class ViewSingleAnalysisComponent implements OnInit {
  @Input() analysisData: any = {};
  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges){
    // const currentAnalysis: SimpleChange = changes.analysisData;
  }

}
