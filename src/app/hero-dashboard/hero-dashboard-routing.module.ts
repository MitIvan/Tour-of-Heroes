import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesDashboardComponent } from './heroes-dashboard/heroes-dashboard.component';

const routes: Routes = [{ path: '', component: HeroesDashboardComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HeroDashboardRoutingModule {}
