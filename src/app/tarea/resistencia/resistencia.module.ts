import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatRadioModule} from '@angular/material/radio';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatListModule} from '@angular/material/list';
import {MatSelectModule} from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { Resistencias3Component } from '../resistencias3/resistencias3.component';

@NgModule({
  declarations: [Resistencias3Component],
  imports: [
    CommonModule,
    MatInputModule,
    MatIconModule,
    FormsModule,
    MatButtonModule,
    MatRadioModule,
    MatFormFieldModule,
    MatListModule,
    MatSelectModule
  ],
  exports:[
    Resistencias3Component
  ]
})
export class ResistenciaModule { }
