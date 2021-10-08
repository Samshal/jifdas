import { NgModule } from '@angular/core';
import { RouterModule, Routes, CanActivate  } from '@angular/router';

import { AuthGuardService } from '../shared/services/auth-guard.service';

import { ShellComponent } from './components/shell/shell.component';
import { ViewFieldReportsComponent } from './components/view-field-reports/view-field-reports.component';
import { ChartsComponent } from './components/charts/charts.component';
import { IncidenceTimelineComponent } from './components/incidence-timeline/incidence-timeline.component';


const routes: Routes = [
  {
    path: '',
    component: ShellComponent,
    canActivate: [AuthGuardService],
    children: [
      {
        path: 'field-reports',
        component: ViewFieldReportsComponent
      },
      {
        path: 'charts',
        component: ChartsComponent
      },
      {
        path: 'timeline',
        component: IncidenceTimelineComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DataManagersRoutingModule { }
