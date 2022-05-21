/**
 * INSTRUCCIONES
 *
 * Ejercicio:
 * Obtén el valor acumulado de los números del array usando un scan.
 * Debe de filtrar para que sólo números sean procesados
 * La salida debe de ser 32
 *
 * Tip:
 * isNan() es una función de JavaScript para determinar si es número.
 * También podemos utilizar typeof();
 * Usar filter<any>(...) para no tener problemas de tipado.
 */

 import { from, filter, pipe, last, scan } from 'rxjs';

 const datos = [1, 2, 'foo', 3, 5, 6, 'bar', 7, 8];

 from(datos).pipe(
 // Completar el código aquí

 ).subscribe( console.log ) // La salida debe de ser 32


