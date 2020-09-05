import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http'

//import {PostCreateModuleModule} from './Post-Create-Module/post-create-module.module';
//import {LoginModuleModule} from './Login-Module/login-module.module'

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { ShowhideDirective } from './Directives/structural/showhide.directive'
import { CommonModule } from '@angular/common';

//import { NgRedux, NgReduxModule} from 'ng2-redux'

//import { iAppState, rootReducer } from './redux/store';


@NgModule({
  declarations: [
    AppComponent,
    ShowhideDirective
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    //NgReduxModule
    //PostCreateModuleModule,
    //LoginModuleModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  /* constructor(ngRedux: NgRedux<iAppState>){
    ngRedux.configureStore(rootReducer, {});
  } */
}
