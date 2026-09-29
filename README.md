# Sistema de cine - TP1 Programación IV

Aplicación web para un cine: cartelera, compra de entradas eligiendo butacas en tiempo real, productos del candy bar, entrada en PDF con QR, validación de QR para empleados y panel de administración.

Trabajo Práctico N.º 1 - Programación IV - UTN FRA - Div. 141 - 2026 C2
Alumno: Santiago Wilke

## Stack

- Angular 22 (componentes standalone, signals, Signal Forms, sin zone.js)
- Supabase: Auth, base de datos PostgreSQL, Realtime y Storage
- PWA con `@angular/service-worker`
- Deploy: pendiente

## Cómo levantarlo

Requiere Node 22.22 o superior.

```bash
npm install
npm start
```

La app queda en `http://localhost:4200`. Antes hay que completar `src/environments/environment.development.ts` con la URL y la clave pública del proyecto de Supabase.

## Estructura

```
src/app/
  core/          servicios, guards y modelos que usa toda la app
  shared/        componentes, pipes, directivas y validadores reutilizables
  features/      pantallas agrupadas por sección
    cartelera/   inicio, listado de películas, detalle y próximamente
    compra/      butacas, candy bar, resumen y pago
    auth/        login y registro
    perfil/      datos, puntos, crédito e historial
    empleado/    validación de QR (lazy loading)
    admin/       panel de administración (lazy loading)
supabase/
  migrations/    scripts SQL (tablas, RLS y funciones)
  functions/     Edge Functions (notificaciones y tareas programadas)
```

## Arquitectura

En progreso.

## Decisiones técnicas

En progreso.
