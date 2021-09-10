import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-decline-field-report',
  templateUrl: './decline-field-report.component.html',
  styleUrls: ['./decline-field-report.component.css']
})
export class DeclineFieldReportComponent implements OnInit {
  @Input() incidentData: any = {};
  constructor() { }

  ngOnInit(): void {
  }

}
