import { Location } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Hero } from 'src/app/shared/models/Hero';
import { Store, select } from '@ngrx/store';

import * as HeroesActions from '../heroes-store/heroes.actions';
import * as heroesReducer from '../heroes-store/heroes.reducer';
import { FormControl, FormGroup } from '@angular/forms';
import { takeUntil } from 'rxjs/operators';
import { HeroBase } from '../base-class.directive';

@Component({
  selector: 'app-heroes-details',
  templateUrl: './heroes-details.component.html',
  styleUrls: ['./heroes-details.component.scss'],
})
export class HeroesDetailsComponent
  extends HeroBase
  implements OnInit, OnDestroy
{
  hero: Hero | undefined;
  id: number;
  heroForm: FormGroup;
  editMode = false;

  HeroPowers = ['Fire', 'Ice', 'Electricity'];

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    heroStore: Store<heroesReducer.State>
  ) {
    super(heroStore);
  }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.editMode = params['id'] != null;
      this.initForm();
    });
  }

  private initForm() {
    let heroName = '';
    let powers = '';
    let birthday = null;

    if (this.editMode) {
      this.heroStore.dispatch(HeroesActions.loadHero({ id: this.id }));
      this.subscription = this.heroStore
        .pipe(takeUntil(this.ngUnsubscribe), select(heroesReducer.getHero))
        .subscribe((hero) => {
          this.hero = hero;
          heroName = hero.name;
          powers = hero.power;
          birthday = hero.birthday;
        });
    }

    this.heroForm = new FormGroup({
      heroName: new FormControl(heroName),
      powers: new FormControl(powers),
      birthday: new FormControl(birthday),
    });
  }

  onSave() {
    if (this.editMode) {
      this.heroStore.dispatch(
        HeroesActions.updateHero({
          hero: {
            id: this.hero.id,
            name: this.heroForm.get('heroName').value,
            power: this.heroForm.get('powers').value,
            birthday: this.heroForm.get('birthday').value,
          },
        })
      );
    } else {
      this.heroStore.dispatch(
        HeroesActions.createHero({
          hero: {
            name: this.heroForm.get('heroName').value,
            power: this.heroForm.get('powers').value,
            birthday: this.heroForm.get('birthday').value,
          },
        })
      );
    }

    this.location.back();
  }

  ngOnDestroy(): void {
    super.ngOnDestroy();
  }
}
