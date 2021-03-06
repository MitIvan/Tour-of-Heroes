import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-select-hero',
  template: `<h1 mat-dialog-title>
      You selected {{ data.hero.name | uppercase }}
    </h1>
    <mat-dialog-actions>
      <button mat-button [mat-dialog-close]="false">Back</button>
      <button mat-button [mat-dialog-close]="true">View Details</button>
    </mat-dialog-actions>`,
})
export class SelectHeroComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}
}
