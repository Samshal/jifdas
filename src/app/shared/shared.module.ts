import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';

import { FormsModule } from '@angular/forms';

import { NgbTypeaheadModule, NgbToastModule } from '@ng-bootstrap/ng-bootstrap';

import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ToastContainerComponent } from './components/toast-container/toast-container.component';

import { AuthGuardService } from './services/auth-guard.service';
import { GlobalSearchComponent } from './components/global-search/global-search.component';

import { NgxDaterangepickerMd } from 'ngx-daterangepicker-material';
import { IncidenceDataSidebarComponent } from './components/incidence-data-sidebar/incidence-data-sidebar.component';

import { AnalysisEditorComponent } from './components/analysis-editor/analysis-editor.component';

import { CKEditorModule } from '@ckeditor/ckeditor5-angular';

@NgModule({
  declarations: [
    HeaderComponent,
    SidebarComponent,
    ToastContainerComponent,
    GlobalSearchComponent,
    IncidenceDataSidebarComponent,
    AnalysisEditorComponent
  ],
  imports: [
    CommonModule,
    NgbToastModule,
    RouterModule,
    NgbTypeaheadModule,
    NgxDaterangepickerMd.forRoot(),
    CKEditorModule,
    FormsModule
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
    AnalysisEditorComponent
  ]
})
export class SharedModule { }
