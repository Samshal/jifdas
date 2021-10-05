import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';

import { FormsModule } from '@angular/forms';

import { NgbTypeaheadModule, NgbToastModule } from '@ng-bootstrap/ng-bootstrap';

import { DataTablesModule } from "angular-datatables";

import { NgxDatatableModule } from '@swimlane/ngx-datatable';

import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ToastContainerComponent } from './components/toast-container/toast-container.component';

import { AuthGuardService } from './services/auth-guard.service';
import { GlobalSearchComponent } from './components/global-search/global-search.component';

import { NgxDaterangepickerMd } from 'ngx-daterangepicker-material';
import { IncidenceDataSidebarComponent } from './components/incidence-data-sidebar/incidence-data-sidebar.component';

import { AnalysisEditorComponent } from './components/analysis-editor/analysis-editor.component';

import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { ViewAnalysisComponent } from './components/view-analysis/view-analysis.component';
import { ViewSingleAnalysisComponent } from './components/view-single-analysis/view-single-analysis.component';
import { AnalysisWorkspaceComponent } from './components/analysis-workspace/analysis-workspace.component';

@NgModule({
  declarations: [
    HeaderComponent,
    SidebarComponent,
    ToastContainerComponent,
    GlobalSearchComponent,
    IncidenceDataSidebarComponent,
    AnalysisEditorComponent,
    ViewAnalysisComponent,
    ViewSingleAnalysisComponent,
    AnalysisWorkspaceComponent
  ],
  imports: [
    CommonModule,
    NgbToastModule,
    RouterModule,
    NgbTypeaheadModule,
    NgxDaterangepickerMd.forRoot(),
    CKEditorModule,
    FormsModule,
    DataTablesModule,
    NgxDatatableModule,
  ],
  providers: [
    AuthGuardService
  ],
  exports: [
    HeaderComponent,
    SidebarComponent,
    ToastContainerComponent,
    GlobalSearchComponent,
    IncidenceDataSidebarComponent,
    AnalysisEditorComponent,
    ViewAnalysisComponent,
    ViewSingleAnalysisComponent,
    AnalysisWorkspaceComponent
  ]
})
export class SharedModule { }
