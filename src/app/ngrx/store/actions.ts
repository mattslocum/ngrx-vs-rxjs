import {Action} from '@ngrx/store';

export enum ActionTypes {
  Wave = 'Wave',
}

export class Wave implements Action {
  readonly type = ActionTypes.Wave;
}
