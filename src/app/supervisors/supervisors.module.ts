import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';

import { DataTablesModule } from "angular-datatables";

import { SupervisorsRoutingModule } from './supervisors-routing.module';
import { ViewAnalysisComponent } from './components/view-analysis/view-analysis.component';
import { ShellComponent } from './components/shell/shell.component';


@NgModule({
  declarations: [
    ViewAnalysisComponent,
    ShellComponent
  ],
  imports: [
    CommonModule,
    SupervisorsRoutingModule,
    SharedModule,
    DataTablesModule
  ]
})
export class SupervisorsModule { }
