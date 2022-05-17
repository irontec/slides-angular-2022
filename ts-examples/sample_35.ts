/* ###### Typescript - Classes

## Modificadores de ámbito (protected)  */

class Vehiculo {
    private bastidor;
    protected serialNumber;
    /*  ....  */
}

class Coche extends Vehiculo{
    /*  ....  */
    public getInfo() {
        return {
            sn: this.serialNumber,
            bastidor: this.bastidor
        }
    }
}

const coche1 = new Coche("kia");

coche1.getInfo(); // ERROR en compilación
