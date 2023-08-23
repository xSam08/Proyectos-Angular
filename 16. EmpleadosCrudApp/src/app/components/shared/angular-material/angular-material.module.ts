import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Angular Material
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatSlideToggleModule
  ],
  exports: [
    MatSlideToggleModule
  ]
})
export class AngularMaterialModule { }
