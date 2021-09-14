import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';


import { DataManagersModule } from '../data-managers/data-managers.module';

import { DataTablesModule } from "angular-datatables";

import { ShellComponent } from './components/shell/shell.component';

import { AnalystsRoutingModule } from './analysts-routing.module';
import { ViewIncidentsComponent } from './components/view-incidents/view-incidents.component';
import { AnalysisEditorComponent } from './components/analysis-editor/analysis-editor.component';


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
    DataManagersModule
  ]
})
export class AnalystsModule { }
