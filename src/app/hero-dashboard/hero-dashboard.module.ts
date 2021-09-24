import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HeroDashboardRoutingModule } from './hero-dashboard-routing.module';

import { HeroesDashboardComponent } from './heroes-dashboard/heroes-dashboard.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [HeroesDashboardComponent],
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
    HeroDashboardRoutingModule,
    SharedModule,
  ],
  exports: [],
})
export class HeroDashboardModule {}
