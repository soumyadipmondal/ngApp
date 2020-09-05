import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/combineLatest';
import 'rxjs/add/operator/switchMap';

import { PostService } from '../../../Services/Post/post-service.service';
import { observable } from 'rxjs';

@Component({
  selector: 'app-commentdetails',
  templateUrl: './commentdetails.component.html',
  styleUrls: ['./commentdetails.component.css']
})
export class CommentdetailsComponent implements OnInit {

  userId: number
  userCreated: number;
  individualPost;
  isActivated:boolean;
  constructor(private _activatedRoute: ActivatedRoute, private _postService: PostService) { }

  ngOnInit(): void {

    //this can be used when component always reinitialize.
   /*  let id = this._activatedRoute.snapshot.paramMap.get('id');
    console.log('snapshot'+ id) */
    //this is an Observable. When the component is not reinitialize then we can use it.
    /* this._activatedRoute.paramMap.subscribe(res => {
      if(res.has('id')){
        this.userId = +res.get('id');
        console.log('paramMap' + this.userId);
      }
    }); */


     // accessing required parameter and query parameter together
    Observable.combineLatest([
      this._activatedRoute.paramMap,
      this._activatedRoute.queryParamMap
    ])
    .switchMap( combineParam =>{
      combineParam.map(param =>{
        if(param.has('id')){
          this.userId = +param.get('id');
        }else{
          console.log(+param.get('userCreated'));
          this.userCreated = +param.get('userCreated')
        }
      });
      return this._postService.getIndividual(this.userId);
    })
    .subscribe(usingOneSubscribe =>
      this.individualPost = usingOneSubscribe
    )

    //accessing History

    this.isActivated = history.state.data.isActivated;
  }
}
