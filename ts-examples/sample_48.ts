/* ###### Typescript - Generics

## Varios tipos */

function hacer<Tarea, Duracion>(arg1: Tarea, arg2: Duracion): string {
    return `Tengo que ${arg1} y tardaré ${arg2} minutos`;
  }

  let a: string = hacer<string, number>('pintar la pared', 125);
  console.log(a); // >> "Tengo que pintar la pared y tardaré 125 minutos"

  let b: string = hacer<string, string>('corregir exámenes', 'unos 60');
  console.log(b); // >> "Tengo que corregir exámenes y tardaré unos 60 minutos"
