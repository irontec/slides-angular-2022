/* ###### Typescript - Core Types

## object (II) */

let a:object = {};
a.toString(); // OK
a.toMagicalString(); // COMPILE ERROR -- Property 'toMagicalString' does not exist on type 'object'.

let a:any = {};
a.toString(); // OK
a.toMagicalString(); // OK >> RUNTIME ERROR -- a.toMagicalString is not a function
