import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatCardModule} from '@angular/material/card';

import { CommentCreateComponent } from './Components/comment-create/comment-create.component';
import { CommentListComponent } from './Components/comment-list/comment-list.component';
import { CommentdetailsComponent } from './Components/comment-details/commentdetails.component'
import { CommentRoutingModule } from './comment-routing.module';
import { CommentHeaderComponent } from './Components/comment-header/comment-header.component';



@NgModule({
  declarations: [CommentCreateComponent, CommentListComponent, CommentdetailsComponent, CommentHeaderComponent],
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatExpansionModule,
    MatCardModule,
    CommentRoutingModule
  ],
  exports: [CommentCreateComponent, CommentListComponent, CommentdetailsComponent, CommentHeaderComponent]
})
export class CommentModuleModule { }
