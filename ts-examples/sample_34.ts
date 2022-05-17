/* ###### Typescript - Classes

## Modificadores de ámbito (private) */

class Coche extends Vehiculo {
    private velocidad: number;

    constructor(marca: string) {
        super(marca); // invocamos método del padre
    }
    arrancar() {
        this.velocidad = 10;
        return "🚗";
    }
    private frenar() {
        return "🛑";
    }
}

const coche1 = new Coche("kia");
coche1.arrancar(); // OK

console.log(coche1.velocidad); // ERROR en compilación

coche1.frenar(); // ERROR en compilación
