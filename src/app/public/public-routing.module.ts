import { SignInComponent } from './components/sign-in/sign-in.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'sign-in'
    },
    {
        path: 'sign-in',
        component: SignInComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
