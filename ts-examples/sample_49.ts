/* ###### Typescript - Generics

## Extendiendo Generic */

interface Identificador {
    nombre: string;
  }
  interface Leon {
    nombre: string;
    peso: number;
  }

  class Animal<Id extends Identificador> {
    public nombre:string;
    constructor(iden: Id) {
      this.nombre = iden.nombre;
    }
  }

  const a = new Animal<Leon>({nombre: 'Simba', peso: 200});

console.log(a.nombre); // >> 'Simba'
