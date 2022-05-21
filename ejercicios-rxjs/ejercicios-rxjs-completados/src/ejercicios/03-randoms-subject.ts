/**
 * Ejercicio:
 *
 * Crear dos subscripciones al observable ya creado reloj$ y hacer que ambos
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

   const subject$ = new Subject();
   reloj$.subscribe(subject$);


  subject$.subscribe( val => console.log('obs1', val) );
  subject$.subscribe( val => console.log('obs2', val) );



