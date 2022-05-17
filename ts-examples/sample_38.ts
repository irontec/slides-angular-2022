/* ###### Typescript - Classes

## Atributos virtuales --> getter / setter */

class Persona {
    constructor(private nombre: string, private apellido: string) {}
    get identificacion() {
        return `${this.nombre} ${this.apellido}`;
    }
    set identificacion(identificacion) {
        this.nombre = identificacion.split(' ')[0];
        this.apellido = identificacion.split(' ')[1];
    }
  }
  const p = new Persona('Han', 'Solo');
  console.log(p.identificacion); // Han Solo
  p.identificacion = "Luke Skywalker";
  console.log(p.identificacion); // Luke Skywalker
