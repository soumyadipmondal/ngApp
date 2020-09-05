import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'

import { LoginComponent } from './Login-Component/login.component';
import { LoginRoutingModule } from './login-routing.module';
//import { ShowhideDirective } from '../Directives/structural/showhide.directive';



@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    FormsModule,
    LoginRoutingModule
  ],
  exports: [LoginComponent]
})
export class LoginModuleModule { }
