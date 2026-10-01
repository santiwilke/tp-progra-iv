import { Component, input, numberAttribute } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-pelicula-detalle',
  styleUrl: './pelicula-detalle.scss',
  templateUrl: './pelicula-detalle.html',
})
export class PeliculaDetalle {
  // llega desde la ruta /peliculas/:peliculaId
  peliculaId = input.required({ transform: numberAttribute });
}
