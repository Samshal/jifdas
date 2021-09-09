import { NgModule } from '@angular/core';
import { RouterModule, Routes, CanActivate  } from '@angular/router';

import { AuthGuardService } from '../shared/services/auth-guard.service';

import { ShellComponent } from './components/shell/shell.component';
import { ViewFieldReportsComponent } from './components/view-field-reports/view-field-reports.component';

const routes: Routes = [
  {
    path: '',
    component: ShellComponent,
    canActivate: [AuthGuardService],
    children: [
      {
        path: 'field-reports',
        component: ViewFieldReportsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DataManagersRoutingModule { }
