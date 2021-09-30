import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';

import { SharedModule } from '../shared/shared.module';


import { DataManagersModule } from '../data-managers/data-managers.module';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';

import { DataTablesModule } from "angular-datatables";

import { ShellComponent } from './components/shell/shell.component';

import { AnalystsRoutingModule } from './analysts-routing.module';
import { ViewIncidentsComponent } from './components/view-incidents/view-incidents.component';

import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { ViewAnalysisComponent } from './components/view-analysis/view-analysis.component';
import { ViewSingleAnalysisComponent } from './components/view-single-analysis/view-single-analysis.component';
import { AnalysisWorkspaceComponent } from './components/analysis-workspace/analysis-workspace.component';


@NgModule({
  declarations: [
    ViewIncidentsComponent,
    ShellComponent,
    ViewAnalysisComponent,
    ViewSingleAnalysisComponent,
    AnalysisWorkspaceComponent
  ],
  imports: [
    CommonModule,
    AnalystsRoutingModule,
    SharedModule,
    DataTablesModule,
    DataManagersModule,
    CKEditorModule,
    NgxDatatableModule,
    FormsModule
  ]
})
export class AnalystsModule { }
