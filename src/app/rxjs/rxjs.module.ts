import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RxjsBaseComponent } from './rxjs-base/rxjs-base.component';
import { RxjsCounterComponent } from './rxjs-counter/rxjs-counter.component';
import { RxjsWaveComponent } from './rxjs-wave/rxjs-wave.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    RxjsBaseComponent,
    RxjsCounterComponent,
    RxjsWaveComponent
  ],
  exports: [
    RxjsBaseComponent
  ]
})
export class RxjsModule { }
