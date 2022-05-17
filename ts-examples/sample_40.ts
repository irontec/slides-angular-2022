/* ###### Typescript - Classes

## Clases abstractas */

abstract class Base {

    adios():void {
      console.log("agur!")
    }
  }

  class Saludo extends Base {

    greet():void {
      console.log("hola!")
    }
  }

  const s = new Saludo();
  s.greet(); // hola!
  s.adios(); // agur!
