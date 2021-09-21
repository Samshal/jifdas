import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';


import { DataManagersModule } from '../data-managers/data-managers.module';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';

import { DataTablesModule } from "angular-datatables";

import { ShellComponent } from './components/shell/shell.component';

import { AnalystsRoutingModule } from './analysts-routing.module';
import { ViewIncidentsComponent } from './components/view-incidents/view-incidents.component';
import { AnalysisEditorComponent } from './components/analysis-editor/analysis-editor.component';

import { NgxDatatableModule } from '@swimlane/ngx-datatable';


@NgModule({
  declarations: [
    ViewIncidentsComponent,
    ShellComponent,
    AnalysisEditorComponent
  ],
  imports: [
    CommonModule,
    AnalystsRoutingModule,
    SharedModule,
    DataTablesModule,
    DataManagersModule,
    CKEditorModule,
    NgxDatatableModule
  ]
})
export class AnalystsModule { }
