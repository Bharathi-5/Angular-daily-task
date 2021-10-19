import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MathsService {

  count: number = 100;

  constructor() { }

  addone(){
    this.count++;
  }
}
