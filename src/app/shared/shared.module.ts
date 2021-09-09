import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';

import { FormsModule } from '@angular/forms';

import { NgbTypeaheadModule, NgbToastModule } from '@ng-bootstrap/ng-bootstrap';

import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ToastContainerComponent } from './components/toast-container/toast-container.component';

import { AuthGuardService } from './services/auth-guard.service';



@NgModule({
  declarations: [
    HeaderComponent,
    SidebarComponent,
    ToastContainerComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgbToastModule,
    RouterModule
  ],
  providers: [
    AuthGuardService
  ],
  exports: [
    HeaderComponent,
    SidebarComponent,
    ToastContainerComponent
  ]
})
export class SharedModule { }
