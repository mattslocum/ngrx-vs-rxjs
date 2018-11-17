import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rxjs-counter',
  templateUrl: './rxjs-counter.component.html',
  styleUrls: ['./rxjs-counter.component.css']
})
export class RxjsCounterComponent implements OnInit {

  waves: number = 0;

  constructor() { }

  ngOnInit() {
  }

}
