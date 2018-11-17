import { Component, OnInit } from '@angular/core';
import {select, Store} from '@ngrx/store';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-ngrx-counter',
  templateUrl: './ngrx-counter.component.html',
  styleUrls: ['./ngrx-counter.component.css']
})
export class NgrxCounterComponent implements OnInit {

  waves$: Observable<number>;

  constructor(private store: Store<{ waves: number }>) { }

  ngOnInit() {
    this.waves$ = this.store.pipe(select('waves'));
  }

}
