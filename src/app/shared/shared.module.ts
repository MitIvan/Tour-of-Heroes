import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpinnerComponent } from './spinner/spinner.component';
import { HeroesDetailsComponent } from './heroes-details/heroes-details.component';
import { MaterialModule } from '../material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ImgDirective } from './img.directive';

@NgModule({
  declarations: [SpinnerComponent, HeroesDetailsComponent, ImgDirective],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    FlexLayoutModule,
    RouterModule.forChild([{ path: '', component: HeroesDetailsComponent }]),
  ],
  exports: [SpinnerComponent, ImgDirective],
})
export class SharedModule {}
