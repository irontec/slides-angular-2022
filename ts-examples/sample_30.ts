/* ###### Typescript - Classes

## Contructor */

class Rectangulo {
    alto: number = 2;
    ancho: number = 3;
    nombre: string = '';
    area(): number {
        return this.alto * this.ancho
    }
    perimetro(): number {
        return this.alto * 2 + this.ancho * 2
    };

    constructor(alto: number, ancho:number){
        this.alto = alto;
        this.ancho = ancho;
    }
  }
