// Extendiendo interfaces

interface Person {
    name: string;
    age: number;
  }

  interface Person {
    hobby: string
  }

  let amaia: Person = {
      name: 'Amaia',
      age: 39
  }

  // Property 'hobby' is missing in type '{ name: string; age: number; }' but required in type 'Person'.
