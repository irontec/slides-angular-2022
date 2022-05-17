interface Perro {
    name: string;
    ladra: () => string;
}
interface Gato {
    name: string;
    maulla: () => string;
}

function getAnimal(nombre: string) : Perro | Gato {
    if (nombre === 'Larry') {
        return { name: 'Larry', maulla: () => 'miau!' };
    } else {
        return { name: 'otro', ladra: () => 'guau!'};
    }
}

const b: Perro | Gato = getAnimal('Larry');
console.log(typeof b); // object ???

const a: Perro | Gato = getAnimal('Larry');
if (a.ladra) {         // ERROR (ladra no existe en gato)
    console.log(`El perro ladra: ${a.ladra()}`);
} else if (a.maulla) { // ERROR (maulla no existe en perro)
    console.log(`El gato maulla: ${a.maulla()}`);
}
