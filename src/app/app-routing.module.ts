import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CinepolisComponent } from './tarea/cinepolis/cinepolis.component';
import { Distancia2pComponent } from './tarea/distancia2p/distancia2p.component';
import { Resistencias3Component } from './tarea/resistencias3/resistencias3.component';
import { PizzasComponent } from './tarea/pizzas/pizzas.component';

const routes: Routes = [
  {path:'',redirectTo: '/home', pathMatch: 'full'},
  {path:'Cinepolis',component:CinepolisComponent},
  {path:'Distancia2P',component:Distancia2pComponent},
  {path:'Resistencia',component:Resistencias3Component},
  {path:'Pizzeria',component:PizzasComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
