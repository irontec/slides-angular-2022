/* ###### Typescript - Core Types

## null & undefined */

let x:undefined = undefined;
let y:null = null;
let num: number = 9;
x = 9; // ERROR;
num = null; //OK!

let x: number | null = 9; // INTERSECCIÓN DE TIPOS al rescate
x = null; // OK!
