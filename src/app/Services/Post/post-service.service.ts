import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import {DataService} from '../Common/data.service'

@Injectable({
  providedIn: 'root'
})
export class PostService extends DataService {
   //url='https://jsonplaceholder.typicode.com/posts';
  constructor(_http : HttpClient) { 
    super('https://jsonplaceholder.typicode.com/posts',_http);
  }
}
