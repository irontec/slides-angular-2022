/* ###### Typescript - Generics

## Tipo Genérico */

function hacer<Duracion>(arg: Duracion): Duracion {
    return arg;
  }

  let a: number = hacer<number>(89);
  let a: string = hacer<string>('2hss');
