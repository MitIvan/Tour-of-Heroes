import { Update } from '@ngrx/entity';
import { createAction, props } from '@ngrx/store';
import { Hero } from 'src/app/shared/models/Hero';

//Load HEROES-------------
export const loadHeroes = createAction('[Hero] Load Heroes');

export const loadHeroesSuccess = createAction(
  '[Hero] Load Heroes Success',
  props<{ heroes: Hero[] }>()
);

export const loadHeroesFail = createAction(
  '[Hero] Load Heroes Fail',
  props<{ message: string }>()
);

export const loadFirstHeroes = createAction('[Hero] Load First Heroes');

//Load HERO----------------
export const loadHero = createAction(
  '[Hero] Load Hero',
  props<{ id: number }>()
);

// export const loadHeroSuccess = createAction(
//   '[Hero] Load Hero Success',
//   props<{ hero: Hero }>()
// );

// export const loadHeroFail = createAction(
//   '[Hero] Load Hero Fail',
//   props<{ message: string }>()
// );

//Create HERO----------------
export const createHero = createAction(
  '[Hero] Create Hero',
  props<{ hero: Hero }>()
);

export const createHeroSuccess = createAction(
  '[Hero] Create Hero Success',
  props<{ hero: Hero }>()
);

export const createHeroFail = createAction(
  '[Hero] Update Hero Fail',
  props<{ message: string }>()
);
//Update HERO-------------
export const updateHero = createAction(
  '[Hero] Update Hero',
  props<{ hero: Hero }>()
);

export const updateHeroSuccess = createAction(
  '[Hero] Update Hero Success',
  props<{ hero: Update<Hero> }>()
);

export const updateHeroFail = createAction(
  '[Hero] Update Hero Fail',
  props<{ message: string }>()
);
// Delete HERO--------------

export const deleteHero = createAction(
  '[Hero] Delete Hero',
  props<{ id: number }>()
);
export const deleteHeroSuccess = createAction(
  '[Hero] Delete Hero Success',
  props<{ id: number }>()
);
export const deleteHeroFail = createAction(
  '[Hero] Delete Hero Fail ',
  props<{ message: string }>()
);
