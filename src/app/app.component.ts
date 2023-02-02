import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ejemplos';

  texto = 'Este es un texto completo';

  numero = 1234.567;

  objeto = {
    nombre: 'Pepe',
    propiedades: [
      'Coche', 'Barco'
    ]
  }

  fecha = new Date(2000, 0, 2, 3, 4, 5);
}
