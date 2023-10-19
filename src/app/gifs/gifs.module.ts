import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';

import { GifsPageComponent } from './pages/gifs-page/gifs-page.component';
import { BusquedaComponent } from './components/busqueda/busqueda.component';
import { ResultadosComponent } from './pages/resultados/resultados.component';
import { GifsCardComponent } from './components/gifs-card/gifs-card.component';



@NgModule({
  declarations: [
    GifsPageComponent,
    BusquedaComponent,
    ResultadosComponent,
    GifsCardComponent
  ],
  exports:[
    GifsPageComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class GifsModule { }
