import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuardService } from '../shared/services/auth-guard.service';

import { ShellComponent } from './components/shell/shell.component';
import { ViewIncidentsComponent } from './components/view-incidents/view-incidents.component';
import { AnalysisEditorComponent } from './components/analysis-editor/analysis-editor.component';

const routes: Routes = [
  {
    path: '',
    component: ShellComponent,
    canActivate: [AuthGuardService],
    children: [
      {
        path: 'incidents',
        component: ViewIncidentsComponent
      },
      {
        path: 'editor',
        component: AnalysisEditorComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AnalystsRoutingModule { }
