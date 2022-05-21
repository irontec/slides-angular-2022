/**
 * INSTRUCCIONES
 *
 * Ejercicio:
 * Obtén el valor acumulado de los números impares del array usando un scan.
 * La salida debe de ser 16
 *
 * */

 import { from, filter, pipe, last, scan } from 'rxjs';

 const datos = [1, 2, 3, 5, 6, 7, 8];

 from(datos).pipe(
   filter(value => value % 2 !== 0),
   scan((acc, curr)=> acc+curr),
   last()

 ).subscribe( console.log ) // La salida debe de ser 16


