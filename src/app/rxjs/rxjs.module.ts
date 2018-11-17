import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RxjsBaseComponent } from './rxjs-base/rxjs-base.component';
import { RxjsCounterComponent } from './rxjs-counter/rxjs-counter.component';
import { RxjsWaveComponent } from './rxjs-wave/rxjs-wave.component';
import {WaveService} from './service/wave.service';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    RxjsBaseComponent,
    RxjsCounterComponent,
    RxjsWaveComponent
  ],
  providers: [
    WaveService
  ],
  exports: [
    RxjsBaseComponent
  ]
})
export class RxjsModule { }
