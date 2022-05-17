/* ###### Typescript - Functions

## Arrow functions */

class Persona {
    nombre = 'Juan';
    duerme(): Promise<string> {
      // función tradicional
      return new Promise(function (resolve) {
        resolve(`despierta ${this.nombre}`);
      });
    }
  }

  const p = new Persona();
  p.duerme().then(console.log); // >> ERROR 'this' implicitly has type 'any' because it does not have a type annotation.

  class Persona2 {
    nombre = 'María';
    duerme(): Promise<string> {
      // arrow function
      return new Promise((resolve) => {
        resolve(`despierta ${this.nombre}`);
      });
    }
  }
  const d = new Persona2();
  d.duerme().then(console.log); // >> despierta María
