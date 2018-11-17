import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {Subscription} from 'rxjs/src/internal/Subscription';

@Injectable()
export class WaveService {

  private waves$: BehaviorSubject<number> = new BehaviorSubject(0);

  constructor() { }

  subscribe(): Observable<number> {
    return this.waves$.asObservable();
  }

  wave() {
    this.waves$.next(this.waves$.getValue() + 1);
  }

}
