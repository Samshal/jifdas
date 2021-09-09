import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../shared/shared.module';

import { FieldRoutingModule } from './field-routing.module';

import { ShellComponent } from './components/shell/shell.component';
import { NewIncidenceComponent } from './components/new-incidence/new-incidence.component';

import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { NgbTypeaheadModule, NgbToastModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    ShellComponent,
    NewIncidenceComponent
  ],
  imports: [
    CommonModule,
    FieldRoutingModule,
    SharedModule,
    FormsModule,
    LeafletModule,
    NgbTypeaheadModule, NgbToastModule
  ]
})
export class FieldModule { }
