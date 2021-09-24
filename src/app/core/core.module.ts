import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar/nav-bar.component';

import { RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [NavBarComponent, WelcomeComponent, PageNotFoundComponent],
  imports: [CommonModule, RouterModule],
  exports: [NavBarComponent],
})
export class CoreModule {}
