/* ###### Typescript - Classes

## Parámetros del constructor  */

class Persona {
    constructor(
      public nombre:string,
      private peso: number,
      readonly ojos: string,
      edad) {}
  }

  const p = new Persona("han solo", 80, "marrones", 20);
  console.log(p.nombre);
  console.log(p.ojos);
  console.log(p.peso); // Property 'peso' is private and only accessible within class 'Persona'.
  console.log(p.edad); // Property 'edad' does not exist on type 'Persona'.
