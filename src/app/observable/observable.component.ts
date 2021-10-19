import { Component, OnInit } from '@angular/core';
import { interval, Observable, of, Subscription } from 'rxjs';
import { filter } from 'rxjs-compat/operator/filter';
import { map, take } from 'rxjs/operators';
import { MathsService } from '../services/maths.service';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.css']
})
export class ObservableComponent implements OnInit {

  destroy: any;

  take_destroy: any;

  constructor(public _maths: MathsService) { }

  ngOnInit(): void {


    const obser$ = new Observable(obs => {
      console.log("Observable started");
      obs.next("100");
      obs.next("200");
      // obs.complete();
      obs.next("300");
      // obs.error("Not Working");
      obs.next("400");
      setTimeout(() => {
        obs.next("500");
      },1000);
      obs.next("600");
      console.log("Observable Ended");
    });

    this.destroy = obser$.subscribe( sub => {
      console.log("First "+sub);
    },
    error => {
      console.log("Error "+error);
    },
    () => {
      console.log("Completed...");
    }
    );

    this.destroy.unsubscribe();

    // obser$.subscribe( sub => {
    //   console.log("Second "+sub);
    // });


    const take$ = interval(1000).pipe(take(5));

    this.take_destroy = take$.subscribe(sub => {
      console.log(sub);
    });

    this.take_destroy.unsubscribe();

    // const of$ = of(1,2,3,4,5,6,7,8,9,10).pipe(filter(f => f % 2 == 0),map(m => m*100));

    // of$.subscribe(sub => {
    //   console.log(sub);
    // })

  }

}
