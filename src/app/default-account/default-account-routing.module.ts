import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ShellComponent } from './components/shell/shell.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: ShellComponent,
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DefaultAccountRoutingModule { }
