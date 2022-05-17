/* ###### Typescript - Classes

## Propiedades estáticas */

class Persona {
    static tipo = 'humano';
    constructor(public nombre: string) {}

    getInfo() {
        return `Soy ${this.nombre}, ${Persona.tipo}.`;
    }
}
const p = new Persona('Jabba')
console.log(p.getInfo()); // Soy Jabba, humano
console.log(Persona.tipo); // humano
