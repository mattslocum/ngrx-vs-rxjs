import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';
import {Wave} from '../store/actions';

@Component({
  selector: 'app-ngrx-wave',
  templateUrl: './ngrx-wave.component.html',
  styleUrls: ['./ngrx-wave.component.css']
})
export class NgrxWaveComponent implements OnInit {

  constructor(private store: Store<{ waves: number }>) { }

  ngOnInit() {}

  wave() {
    this.store.dispatch(new Wave());
  }
}
