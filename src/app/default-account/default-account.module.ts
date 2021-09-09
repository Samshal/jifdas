import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';

import { DefaultAccountRoutingModule } from './default-account-routing.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ShellComponent } from './components/shell/shell.component';


@NgModule({
  declarations: [
    DashboardComponent,
    ShellComponent
  ],
  imports: [
    CommonModule,
    DefaultAccountRoutingModule,
    SharedModule
  ]
})
export class DefaultAccountModule { }
