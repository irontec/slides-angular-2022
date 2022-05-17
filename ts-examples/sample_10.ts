/* ###### Typescript - Core Types

## enum (I) */

enum Color { Rojo, Verde, Azul};
let c: Color = Color.Rojo;

enum Color { Rojo = 43, Verde, Azul = 50};
console.log('>> ' + Color.Rojo) // >> 43
console.log('>> ' + Color.Verde) // >> 44
console.log('>> ' + Color.Azul) // >> 50
