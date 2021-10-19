import { Component, OnInit } from '@angular/core';
import { FreeapiService } from '../services/freeapi.service';
import { Comments } from '../classes/comments';
import { Posts } from '../classes/posts';

@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.css']
})
export class HttpComponent implements OnInit {

  constructor(private _freeapiservice: FreeapiService) { }

  listcomments: Comments[] = [];
  objpost: any;

  ngOnInit(): void {
    this._freeapiservice.getcomments()
    .subscribe
    (
      data =>
      {
          this.listcomments = data;
      }
    );


    var opost = new Posts();

    opost.id = 1;
    opost.name = "Angular";
    opost.email = "angular@gmail.com";
    opost.mobile = 9945633228;


    this._freeapiservice.post(opost)
    .subscribe
    (
      data =>
      {
          this.objpost = data;
          console.log("Post Data is getting executed...");
          console.log(data);
      }
    );

  }

}
