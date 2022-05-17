class Animal {
    pies: number = 2;
    constructor(public nombre: string, pies: number) {}
}
class Persona {
    constructor(public nombre: string) {}
}
let a = new Animal('Larry', 2);
let p = new Persona('Walter');

a = p; // ERROR --> Property 'pies' is missing in type 'Persona' but required in type 'Animal'.'pies' is declared but its value is never read.
