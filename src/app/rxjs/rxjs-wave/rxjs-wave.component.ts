import { Component, OnInit } from '@angular/core';
import {WaveService} from '../service/wave.service';

@Component({
  selector: 'app-rxjs-wave',
  templateUrl: './rxjs-wave.component.html',
  styleUrls: ['./rxjs-wave.component.css']
})
export class RxjsWaveComponent implements OnInit {

  constructor(private waveSerice: WaveService) { }

  ngOnInit() {}

  wave() {
    this.waveSerice.wave();
  }

}
