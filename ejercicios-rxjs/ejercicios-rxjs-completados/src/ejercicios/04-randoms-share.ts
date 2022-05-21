/**
 * Ejercicio:
 *
 * Crear dos subscripciones al observable ya creado reloj$ y hacer que ambos
 * emitan exactamente el mismo valor utilizando share().
 *
 */

import { interval, share } from 'rxjs';
import { take, map } from 'rxjs/operators';

  // == CREACIÓN DEL OBSERVABLE - NO TOCAR este bloque ====
  const reloj$ = interval(1000).pipe(
    take(5),
    map( val => Math.round(Math.random() * 100) ),
    share()

  );
  // ============================================

  reloj$.subscribe( val => console.log('obs1', val) );
  reloj$.subscribe( val => console.log('obs2', val) );



