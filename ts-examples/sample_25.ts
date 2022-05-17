interface GreetFunc {
    (name: string): string;
}

interface Greet {
    lang: string;
    greet: GreetFunc;
}

const p:Greet = {
    lang: 'es',
    greet: (nombre) => `Hola ${nombre}`
  }
