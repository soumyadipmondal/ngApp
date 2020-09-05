import { Component, OnInit , Input, ViewChild} from '@angular/core';
import { PostService } from '../../../Services/Post/post-service.service';

import { CommentCreateComponent } from '../comment-create/comment-create.component';

@Component({
  selector: 'app-post-list',
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.css']
})
export class CommentListComponent implements OnInit {

  //@Input() isActive: boolean;

  //someVar : CommentCreateComponent;
  
  @ViewChild(CommentCreateComponent) someVar: CommentCreateComponent;
  posts: any = '';
  editComment = '';
  isActivated:boolean;
  constructor(private _postService: PostService) { }
  //panelOpenState = false;

  ngOnInit(): void {
    //console.log(this.titleComments);
    //console.log(this.someVar);
    this.isActivated = history.state.data.isactive;
    this._postService.getAll()
        .subscribe( res => {
          this.posts = res;
          this.posts=this.posts.map(post =>{
            return {
              ...post, 
              isEdit: false
            }
          })
        })
  }

  newComment = function(data){
    this.addComment(this.someVar.commentObj);
  }

  makeEditable(itemSelected){
    itemSelected.isEdit=true;
    this.editComment = itemSelected.title;

  }
  
  addComment(comment){
    let add = {title:''};
      if(comment instanceof HTMLInputElement){
        add = {title: comment.value};
        comment.value= '';
      }else{
        add = {title: comment.comment};
      }
      
    this._postService.create(add)
        .subscribe(response => {
          console.log(response);
          //add['id'] = response.id;
          this.posts.splice(0,0, add);
        });
  }
  updatePost(editedComment, index){
    this.posts[index].isEdit=false;
    this.posts[index].title=editedComment;
    this._postService.update(editedComment, this.posts[index]);
  }

}
