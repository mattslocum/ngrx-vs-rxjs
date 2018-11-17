import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngrx-counter',
  templateUrl: './ngrx-counter.component.html',
  styleUrls: ['./ngrx-counter.component.css']
})
export class NgrxCounterComponent implements OnInit {

  waves: number = 0;

  constructor() { }

  ngOnInit() {
  }

}
