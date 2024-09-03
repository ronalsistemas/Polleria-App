import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainPageComponent } from './pages/main-page.component';
import { ListaComponent } from "./components/lista/lista.component";
import { AgregarClienteComponent } from "./components/agregar-cliente/agregar-cliente.component";

@NgModule({
  declarations: [
    MainPageComponent
  ],
  exports: [
    MainPageComponent
  ],
  imports: [
    CommonModule,
    ListaComponent,
    AgregarClienteComponent
]
})
export class ClientesModule { }
