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

const a: Perro | Gato = getAnimal('Larry');

function esPerro(animal: Perro | Gato): animal is Perro {
    return (animal as Perro).ladra !== undefined;
}

if (esPerro(a)) { // OK
    console.log(`El perro ladra: ${a.ladra()}`);
} else { // TS sabe que si no es perro, es gato ;)
    console.log(`El gato maulla: ${a.maulla()}`);
}
