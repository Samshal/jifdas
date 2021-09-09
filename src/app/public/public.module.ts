import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { PublicRoutingModule } from './public-routing.module';
import { SignInComponent } from './components/sign-in/sign-in.component';


@NgModule({
  declarations: [
    SignInComponent
  ],
  imports: [
    CommonModule,
    PublicRoutingModule,
    FormsModule
  ]
})
export class PublicModule { }
