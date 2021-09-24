import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { Hero } from 'src/app/shared/models/Hero';
import { HeroesService } from '../heroes.service';

import * as HeroesActions from './heroes.actions';

@Injectable()
export class HeroEffects {
  loadHeroes$ = createEffect((): any =>
    this.actions$.pipe(
      ofType(HeroesActions.loadHeroes),
      mergeMap(() =>
        this.heroesService.getHeroes().pipe(
          map((heroes: Hero[]) => {
            return HeroesActions.loadHeroesSuccess({ heroes });
          }),
          catchError((err) => {
            return of(HeroesActions.loadHeroesFail({ message: err }));
          })
        )
      )
    )
  );

  // loadHero$ = createEffect((): any =>
  //   this.actions$.pipe(
  //     ofType(HeroesActions.loadHero),
  //     mergeMap((action) =>
  //       this.heroesService.getHeroById(action.id).pipe(
  //         map((hero: Hero) => {
  //           return HeroesActions.loadHeroSuccess({ hero });
  //         }),
  //         catchError((err) => {
  //           return of(HeroesActions.loadHeroFail({ message: err }));
  //         })
  //       )
  //     )
  //   )
  // );

  createHero$ = createEffect((): any =>
    this.actions$.pipe(
      ofType(HeroesActions.createHero),
      map((action) => action.hero),
      mergeMap((hero) =>
        this.heroesService.createHero(hero).pipe(
          map((hero: Hero) => {
            return HeroesActions.createHeroSuccess({ hero });
          }),
          catchError((err) => {
            return of(HeroesActions.createHeroFail({ message: err }));
          })
        )
      )
    )
  );

  updateHero$ = createEffect((): any =>
    this.actions$.pipe(
      ofType(HeroesActions.updateHero),
      map((action) => action.hero),
      mergeMap((hero) =>
        this.heroesService.updateHero(hero).pipe(
          map((updateHero: Hero) => {
            return HeroesActions.updateHeroSuccess({
              hero: { id: updateHero.id, changes: hero },
            });
          }),
          catchError((err) => {
            return of(HeroesActions.updateHeroFail({ message: err }));
          })
        )
      )
    )
  );

  deleteHero$ = createEffect((): any =>
    this.actions$.pipe(
      ofType(HeroesActions.deleteHero),
      map((action) => action.id),
      mergeMap((id) =>
        this.heroesService.deleteHero(id).pipe(
          map(() => {
            return HeroesActions.deleteHeroSuccess({ id });
          }),
          catchError((err) => {
            return of(HeroesActions.deleteHeroFail({ message: err }));
          })
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private heroesService: HeroesService
  ) {}
}
