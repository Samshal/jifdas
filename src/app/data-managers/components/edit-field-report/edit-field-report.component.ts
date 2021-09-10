import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-edit-field-report',
  templateUrl: './edit-field-report.component.html',
  styleUrls: ['./edit-field-report.component.css']
})
export class EditFieldReportComponent implements OnInit {
  @Input() incidentData: any = {};

  metadataFields: any = [];

  constructor() { }

  ngOnInit(): void {
  }

  addMetadataField(): void {
    this.metadataFields.push({
      field: '',
      value: ''
    });
  }

  removeMetadataField(index: any): void {
    this.metadataFields.splice(index, 1);
  }

}
