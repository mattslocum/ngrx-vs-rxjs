import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgrxBaseComponent } from './ngrx-base/ngrx-base.component';
import { NgrxWaveComponent } from './ngrx-wave/ngrx-wave.component';
import { NgrxCounterComponent } from './ngrx-counter/ngrx-counter.component';
import {StoreModule} from '@ngrx/store';
import {waveReducer} from './store/reducers';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forRoot({ waves: waveReducer }),
  ],
  declarations: [
    NgrxBaseComponent,
    NgrxWaveComponent,
    NgrxCounterComponent
  ],
  exports: [
    NgrxBaseComponent
  ]
})
export class NgrxModule { }
