/* ###### Typescript - Classes

## Modificadores de ámbito (public) */

class Coche extends Vehiculo {
    constructor(marca: string) {
        super(marca); // invocamos método del padre
    }

    arrancar() {
        return "🚗";
    }
}

const coche1 = new Coche("kia");

console.log(coche1.marca); // kia

console.log(coche1.radio()); // 🎶
