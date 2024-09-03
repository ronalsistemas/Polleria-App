import { Component } from '@angular/core';

import { ClientesModule } from './clientes/clientes.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
  imports: [ClientesModule], //Se está importando el módulo cliente porque si no lo hago no me carga

})
export class AppComponent {
  title = 'Polleria-App';
}
