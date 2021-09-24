import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Hero } from 'src/app/shared/models/Hero';
import { Router } from '@angular/router';
import { SelectHeroComponent } from './select-hero.component';
import { Store, select } from '@ngrx/store';

import * as heroesActions from '../../shared/heroes-store/heroes.actions';
import * as heroesReducer from '../../shared/heroes-store/heroes.reducer';
import { takeUntil } from 'rxjs/operators';
import { HeroBase } from 'src/app/shared/base-class.directive';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './heroes-list.component.html',
  styleUrls: ['./heroes-list.component.scss'],
})
export class HeroesListComponent extends HeroBase implements OnInit, OnDestroy {
  heroes: Hero[];

  constructor(
    private dialog: MatDialog,
    private router: Router,
    heroStore: Store<heroesReducer.State>
  ) {
    super(heroStore);
  }

  ngOnInit(): void {
    super.ngOnInit();

    this.subscription = this.heroStore
      .pipe(takeUntil(this.ngUnsubscribe), select(heroesReducer.getHeroes))
      .subscribe((heroes) => (this.heroes = heroes));
  }

  onSelectHero(hero: Hero) {
    const dialogRef = this.dialog.open(SelectHeroComponent, {
      data: {
        hero: hero,
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.router.navigate([`hero-detail/${hero.id}`]);
      }
    });
  }

  onDelete(id: number) {
    console.log(id);

    this.heroStore.dispatch(heroesActions.deleteHero({ id }));
  }

  ngOnDestroy(): void {
    super.ngOnDestroy();
  }
}
