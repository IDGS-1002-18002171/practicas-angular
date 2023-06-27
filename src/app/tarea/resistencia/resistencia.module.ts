import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { Resistencias3Component } from '../resistencias3/resistencias3.component';

@NgModule({
  declarations: [Resistencias3Component],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[
    Resistencias3Component
  ]
})
export class ResistenciaModule { }
