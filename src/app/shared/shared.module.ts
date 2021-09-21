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



@NgModule({
  declarations: [
    HeaderComponent,
    SidebarComponent,
    ToastContainerComponent,
    GlobalSearchComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgbToastModule,
    RouterModule,
    NgbTypeaheadModule,
    NgxDaterangepickerMd.forRoot()
  ],
  providers: [
    AuthGuardService
  ],
  exports: [
    HeaderComponent,
    SidebarComponent,
    ToastContainerComponent,
    GlobalSearchComponent
  ]
})
export class SharedModule { }
