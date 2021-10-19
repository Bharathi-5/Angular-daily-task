import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Posts } from '../classes/posts';

@Injectable({
  providedIn: 'root'
})
export class FreeapiService {

  constructor(private httpclient: HttpClient) { }

  getcomments(): Observable<any>{
      return this.httpclient.get("http://demo5404056.mockable.io/getdata")
  }

  post(opost:Posts): Observable<any>{
    return this.httpclient.post("http://demo5404056.mockable.io/postdata",opost);
  }

}
