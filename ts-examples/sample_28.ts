// Extendiendo interfaces

interface Person {
    name: string;
    age: number;
  }

  interface Cyborg extends Person {
    serialNumber: number;
  }

  const p:Cyborg = {
    name: 'Robocop',
    age: 35,
    serialNumber: 0x7F5B63
  }

