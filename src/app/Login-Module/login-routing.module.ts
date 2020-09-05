import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './Login-Component/login.component';

const loginroute: Routes = [
  {
      path: '',
      redirectTo: '/login',
      pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  }


]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(loginroute),
    CommonModule
  ],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
