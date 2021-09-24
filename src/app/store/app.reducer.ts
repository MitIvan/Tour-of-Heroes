import { ActionReducerMap } from '@ngrx/store';
import * as formHeroes from '../shared/heroes-store/heroes.reducer';

export interface AppState {
  heroes: formHeroes.State;
}

export const appReducer: ActionReducerMap<AppState> = {
  heroes: formHeroes._heroReducer,
};
