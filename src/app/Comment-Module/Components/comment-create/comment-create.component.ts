import { Component, OnInit, Output, EventEmitter} from '@angular/core';


@Component({
  selector: 'app-comment-create',
  templateUrl: './comment-create.component.html',
  styleUrls: ['./comment-create.component.css']
})
export class CommentCreateComponent implements OnInit {
  @Output() mycomment = new EventEmitter();
  constructor() { }
  post='';
  headerTxt : string = 'Post Your Comment';
  commentTxt : string = '';
  titleTxt: string = '';
  commentObj: Object = {
    comment: ''
  }

  ngOnInit(): void {
  }

  onSubmit = function(data){
    this.post='';
    this.commentObj.comment = data.value; //View Child
    if(data instanceof HTMLInputElement){
      this.commentObj.comment = data.value;
    }else{
      this.commentObj.comment = data
    }
    
    this.mycomment.emit(this.commentObj); // Event Emmit
  }

}
