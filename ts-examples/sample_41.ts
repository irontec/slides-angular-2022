/* ###### Typescript - Functions

## Parámetros por defecto */

function saluda(aQuien = 'mundo'): void {
    console.log(`Hola ${aQuien}`);
  }

  saluda("Pepito"); // >> Hola pepito
  saluda(); // >> Hola mundo
  saluda(undefined); // >> Hola mundo
