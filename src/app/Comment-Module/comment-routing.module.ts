import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Routes, RouterModule} from '@angular/router';

import { CommentCreateComponent } from './Components/comment-create/comment-create.component';
import { CommentListComponent } from './Components/comment-list/comment-list.component';
import { CommentdetailsComponent } from './Components/comment-details/commentdetails.component'

const comment: Routes = [
    {
      path: '',
      redirectTo: '/comment/commentlist',
      pathMatch: 'full'
    },
    {
      path: 'commentlist',
      component: CommentListComponent
    },
    {
      path: 'comment/commentdetails/:id',
      component: CommentdetailsComponent
    }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(comment)
  ],
  exports:[RouterModule]
})
export class CommentRoutingModule { }
