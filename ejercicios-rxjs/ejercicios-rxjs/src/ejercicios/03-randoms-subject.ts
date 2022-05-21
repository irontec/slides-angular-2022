/**
 * Ejercicio:
 *
 * Crear dos subscripciones al observable y hacer que ambas
 * emitan exactamente el mismo valor utilizando Subject
 *
 *
 */

import { interval, Subject } from 'rxjs';
import { take, map } from 'rxjs/operators';

  // == CREACIÓN DEL OBSERVABLE - NO TOCAR este bloque ====
  const reloj$ = interval(1000).pipe(
    take(5),
    map( val => Math.round(Math.random() * 100) )
  );
  // ============================================

 // Completar el código aquí



