/* ###### Typescript - Advanced Types

## Tipado - Compatibilidad (I) */

interface Persona { nombre: string }
interface Bicho { nombre: string }

class Animal {
    constructor (public nombre) {}
}

let p:Persona;
p = new Animal('Larry'); // Es correcto!
let a:Bicho;
a = p; // OK!
