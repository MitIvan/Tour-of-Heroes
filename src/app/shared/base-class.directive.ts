import { Directive, OnDestroy, OnInit } from '@angular/core';
import { Subject, Subscription } from 'rxjs';

import * as heroesActions from '../shared/heroes-store/heroes.actions';
import * as heroesReducer from '../shared/heroes-store/heroes.reducer';
import { takeUntil } from 'rxjs/operators';
import { select, Store } from '@ngrx/store';

@Directive({
  selector: 'heroBase',
})
export class HeroBase implements OnInit, OnDestroy {
  subscription: Subscription;
  loadingSubscription: Subscription;
  ngUnsubscribe = new Subject();
  loading = false;
  constructor(public heroStore: Store<heroesReducer.State>) {}

  ngOnInit(): void {
    this.loadingSubscription = this.heroStore
      .pipe(
        takeUntil(this.ngUnsubscribe),
        select(heroesReducer.getHeroesLoading)
      )
      .subscribe((loading) => (this.loading = loading));

    this.heroStore.dispatch(heroesActions.loadHeroes());
  }

  ngOnDestroy(): void {
    console.log('base on destroy');

    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
}
