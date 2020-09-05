import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private url: string, private _http: HttpClient) { }
  
  getAll(){
    return this._http.get(this.url)
  }

  create(comment){
    return this._http.post(this.url, JSON.stringify(comment));
  }

  update(editedComment, data){
     this._http.put(this.url +'/' + data.id, JSON.stringify(data));
  }

  //Individual Element

  getIndividual(uid){
    return this._http.get(this.url+'/'+uid);
  }
}
