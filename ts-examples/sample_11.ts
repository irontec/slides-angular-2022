/* ###### Typescript - Core Types

## enum (II) */

enum Color { Rojo = 43, Verde, Azul = 50};
console.log('>> ' + Color[43]) // >> Rojo

enum Color { Rojo = 'RED', Verde = 'GREEN', Azul = 50};
console.log('>> ' + Color.Rojo) // >> RED

enum Color { Rojo = 1, Verde = Color.Rojo * 2, Azul = Color.Verde * 2};
console.log('>> ' + Color.Azul) // >> 4
