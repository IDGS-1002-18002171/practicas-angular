import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DistanciaModule } from './tarea/distancia/distancia.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuComponent } from './tarea/menu/menu.component';
import { CineModule } from './tarea/cine/cine.module';
import { ResistenciaModule } from './tarea/resistencia/resistencia.module';
import { PizzeriaModule } from './tarea/pizzeria/pizzeria.module';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DistanciaModule,
    BrowserAnimationsModule,
    CineModule,
    ResistenciaModule,
    PizzeriaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
