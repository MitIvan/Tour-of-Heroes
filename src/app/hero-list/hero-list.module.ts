import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HeroListRoutingModule } from './hero-list-routing.module';

import { HeroesListComponent } from './heroes-list/heroes-list.component';
import { SelectHeroComponent } from './heroes-list/select-hero.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [HeroesListComponent, SelectHeroComponent],
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
    HeroListRoutingModule,
    SharedModule,
  ],
  exports: [],
  entryComponents: [SelectHeroComponent],
})
export class HeroListModule {}
