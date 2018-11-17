import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {WaveService} from '../service/wave.service';

@Component({
  selector: 'app-rxjs-counter',
  templateUrl: './rxjs-counter.component.html',
  styleUrls: ['./rxjs-counter.component.css']
})
export class RxjsCounterComponent implements OnInit {

  waves$: Observable<number>;

  constructor(private waveService: WaveService) { }

  ngOnInit() {
    this.waves$ = this.waveService.subscribe();
  }

}
