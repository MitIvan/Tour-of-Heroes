import {
  createReducer,
  on,
  Action,
  createFeatureSelector,
  createSelector,
} from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Hero } from 'src/app/shared/models/Hero';
import * as HeroActions from './heroes.actions';
import { act } from '@ngrx/effects';

export interface State extends EntityState<Hero> {
  selectedHeroId: number | null;
  loading: boolean;
  error: string;
}

export const heroAdapter: EntityAdapter<Hero> = createEntityAdapter<Hero>();

export const defaultHero: State = {
  ids: [],
  entities: {},
  selectedHeroId: null,
  loading: false,
  error: '',
};

const initialState = heroAdapter.getInitialState(defaultHero);

const heroReducer = createReducer(
  initialState,
  on(HeroActions.loadHeroes, (state, action) => ({
    ...state,
    loading: true,
  })),

  on(HeroActions.loadHeroesSuccess, (state, action) => {
    return heroAdapter.setMany(action.heroes, {
      ...state,
      loading: false,
    });
  }),

  on(HeroActions.loadHeroesFail, (state, action) => ({
    ...state,
    entities: {},
    loading: false,
    error: action.message,
  })),

  on(HeroActions.loadHero, (state, action) => {
    return {
      ...state,
      selectedHeroId: action.id,
    };
  }),

  // on(HeroActions.loadHeroSuccess, (state, action) => {
  //   return heroAdapter.addOne(action.hero, {
  //     ...state,
  //     selectedHeroId: action.hero.id,
  //   });
  // }),

  // on(HeroActions.loadHeroFail, (state, actions) => {
  //   return {
  //     ...state,
  //     error: actions.message,
  //   };
  // }),

  on(HeroActions.createHeroSuccess, (state, action) => {
    return heroAdapter.addOne(action.hero, state);
  }),

  on(HeroActions.createHeroFail, (state, actions) => {
    return {
      ...state,
      error: actions.message,
    };
  }),

  on(HeroActions.updateHeroSuccess, (state, action) => {
    return heroAdapter.updateOne(action.hero, state);
  }),

  on(HeroActions.updateHeroFail, (state, actions) => {
    return {
      ...state,
      error: actions.message,
    };
  }),

  on(HeroActions.deleteHeroSuccess, (state, action) => {
    return heroAdapter.removeOne(action.id, state);
  }),

  on(HeroActions.deleteHeroFail, (state, actions) => {
    return {
      ...state,
      error: actions.message,
    };
  })
);

export function _heroReducer(state: State, action: Action) {
  return heroReducer(state, action);
}

//Selectors

const getHeroFeatureState = createFeatureSelector<State>('heroes');

export const getHeroes = createSelector(
  getHeroFeatureState,
  heroAdapter.getSelectors().selectAll
);

export const getHeroId = createSelector(
  getHeroFeatureState,
  (state: State) => state.selectedHeroId
);

export const getHero = createSelector(
  getHeroFeatureState,
  getHeroId,
  (state) => state.entities[state.selectedHeroId]
);

export const getHeroesLoading = createSelector(
  getHeroFeatureState,
  (state: State) => state.loading
);

export const getError = createSelector(
  getHeroFeatureState,
  (state: State) => state.error
);
