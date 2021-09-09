import { NgModule } from '@angular/core';
import { RouterModule, Routes, CanActivate  } from '@angular/router';

import { AuthGuardService } from '../shared/services/auth-guard.service';

import { ShellComponent } from './components/shell/shell.component';
import { NewIncidenceComponent } from './components/new-incidence/new-incidence.component';

const routes: Routes = [
  {
    path: '',
    component: ShellComponent,
    canActivate: [AuthGuardService],
    children: [
      {
        path: 'new-incidence',
        component: NewIncidenceComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FieldRoutingModule { }
