class Animal {
    constructor(public nombre: string, pies: number) {}
}
class Persona {
    constructor(public nombre: string) {}
}
let a = new Animal('Larry', 2);
let p = new Persona('Walter');

a = p; // OK!!
