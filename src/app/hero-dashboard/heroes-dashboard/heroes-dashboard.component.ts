import { Component, OnDestroy, OnInit } from '@angular/core';
import { Hero } from 'src/app/shared/models/Hero';
import { Store, select } from '@ngrx/store';

import * as heroesReducer from '../../shared/heroes-store/heroes.reducer';
import { takeUntil } from 'rxjs/operators';
import { HeroBase } from 'src/app/shared/base-class.directive';

@Component({
  selector: 'app-heroes-dashboard',
  templateUrl: './heroes-dashboard.component.html',
  styleUrls: ['./heroes-dashboard.component.scss'],
})
export class HeroesDashboardComponent
  extends HeroBase
  implements OnInit, OnDestroy
{
  heroes: Hero[];

  constructor(heroStore: Store<heroesReducer.State>) {
    super(heroStore);
  }

  ngOnInit(): void {
    super.ngOnInit();
    this.subscription = this.heroStore
      .pipe(takeUntil(this.ngUnsubscribe), select(heroesReducer.getHeroes))
      .subscribe((heroes) => (this.heroes = heroes.slice(0, 5)));
  }

  ngOnDestroy(): void {
    super.ngOnDestroy();
  }
}
