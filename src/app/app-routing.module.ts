import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//import { LoginComponent } from './Login-Module/Login-Component/login.component';
//import { PostCreateComponent } from './Post-Create-Module/Components/post-create/post-create.component'

import { LoginRoutingModule } from './Login-Module/login-routing.module';
import { CommentRoutingModule } from './Comment-Module/comment-routing.module';

import { AuthGuard } from './Services/AuthGuard/auth-guard.service'

//Lazy Routing with Child
const mainRoutes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./Login-Module/login-module.module').then(m=>m.LoginModuleModule)
    //component: LoginComponent
  },
  {
    path: 'comment',
    loadChildren: () => import('./Comment-Module/comment-module.module').then(m=>m.CommentModuleModule),
    canActivate: [AuthGuard]
    //component: PostCreateComponent

  }
];

@NgModule({
  imports: [RouterModule.forRoot(mainRoutes), LoginRoutingModule, CommentRoutingModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
