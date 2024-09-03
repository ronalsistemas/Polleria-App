//No se está haciendo uso de este módulo, aunque debería
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ClientesModule } from './clientes/clientes.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    ClientesModule,
  ],
  exports: [],
  providers: []
})
export class AppModule { }
