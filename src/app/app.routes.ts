import { Routes } from '@angular/router';
import { Inicio } from './features/cartelera/inicio/inicio';
import { Peliculas } from './features/cartelera/peliculas/peliculas';
import { PeliculaDetalle } from './features/cartelera/pelicula-detalle/pelicula-detalle';
import { Proximamente } from './features/cartelera/proximamente/proximamente';
import { Login } from './features/auth/login/login';
import { Registro } from './features/auth/registro/registro';
import { Perfil } from './features/perfil/perfil/perfil';

export const routes: Routes = [
  { path: '', component: Inicio },
  { path: 'peliculas', component: Peliculas },
  { path: 'peliculas/:peliculaId', component: PeliculaDetalle },
  { path: 'proximamente', component: Proximamente },
  { path: 'login', component: Login },
  { path: 'registro', component: Registro },
  { path: 'perfil', component: Perfil },
  // empleado y admin se descargan recién cuando alguien entra (lazy loading)
  {
    path: 'empleado',
    loadChildren: () => import('./features/empleado/empleado.routes').then((m) => m.empleadoRoutes),
  },
  {
    path: 'admin',
    loadChildren: () => import('./features/admin/admin.routes').then((m) => m.adminRoutes),
  },
  { path: '**', redirectTo: '' },
];
