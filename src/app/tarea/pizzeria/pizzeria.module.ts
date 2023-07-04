import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { PizzasComponent } from '../pizzas/pizzas.component';

@NgModule({
  declarations: [PizzasComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports:[
    PizzasComponent
  ]
})
export class PizzeriaModule { }
