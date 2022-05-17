/* ###### Typescript - Classes

## Modificador de acceso (readonly) */

class Entrada {
    readonly precio:number = 10;
    readonly pelicula: string;

    constructor(pelicula) {
        this.pelicula = pelicula;
    }
}

const e1 = new Entrada('Deadpool 2');
e1.pelicula = 'Han Solo'; // ERROR en compilación
e1.precio = 5; // ERROR en compilación
