import {ActionTypes} from './actions';
import {Action} from '@ngrx/store';


export const initialState = 0;

export function waveReducer(state = initialState, action: Action) {
  switch (action.type) {
    case ActionTypes.Wave: {
      return state + 1;
    }
  }

  // kinda weird to me
  return state;
}
