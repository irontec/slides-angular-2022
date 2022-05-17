/* ###### Typescript - Functions

## Desestructuración de Parámetros */

interface Person { name: string, age: number }

function saluda({ name, age}: Person) {
  console.log(`Hola ${name}. Tienes ${age} años`);
}

const p: Person = { name : 'Pepito', age: 20};
saluda(p); // >> Hola Pepito. Tienes 20 años.
