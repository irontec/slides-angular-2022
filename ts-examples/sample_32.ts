/* ###### Typescript - Classes

## Herencia II */

class Vehiculo { // clase superior
    marca: string;
    constructor(marca: string) {
        this.marca = marca;
    }
    arrancar() {
        return "➡️";
    }
}

class Coche extends Vehiculo { // especialización

    constructor(marca: string) {
        super(marca); // invocamos constructor del padre
    }
    arrancar() {
        return "❓";
    }
    radio() {
        return "🎶";
    }
}

const coche1 = new Coche("kia");
console.log(coche1.marca); // "kia"
console.log(coche1.radio()); // "🎶"
