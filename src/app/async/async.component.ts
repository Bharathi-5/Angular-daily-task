import { Component, OnInit } from '@angular/core';
import { MathsService } from '../services/maths.service';

@Component({
  selector: 'app-async',
  templateUrl: './async.component.html',
  styleUrls: ['./async.component.css'],
})
export class AsyncComponent implements OnInit {

  constructor(public _maths: MathsService) { }

  ngOnInit(): void {
  }

  increase(){
    this._maths.addone();
  }

}
