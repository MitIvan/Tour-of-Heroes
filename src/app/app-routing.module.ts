import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './core/page-not-found/page-not-found.component';
import { WelcomeComponent } from './core/welcome/welcome.component';
import { HeroesDetailsComponent } from './shared/heroes-details/heroes-details.component';

const routes: Routes = [
  { path: '', component: WelcomeComponent },
  {
    path: 'hero-dashboard',
    loadChildren: () =>
      import('./hero-dashboard/hero-dashboard.module').then(
        (m) => m.HeroDashboardModule
      ),
  },
  {
    path: 'hero-list',
    loadChildren: () =>
      import('./hero-list/hero-list.module').then((m) => m.HeroListModule),
  },
  {
    path: 'hero-detail/:id',
    component: HeroesDetailsComponent,
    // loadChildren: () =>
    //   import('./shared/shared.module').then((m) => m.SharedModule),
  },
  {
    path: 'new',
    component: HeroesDetailsComponent,
    // loadChildren: () =>
    //   import('./shared/shared.module').then((m) => m.SharedModule),
  },
  {
    path: 'not-found',
    component: PageNotFoundComponent,
  },
  {
    path: '**',
    redirectTo: '/not-found',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
