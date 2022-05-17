/* ###### Typescript - Basics

## Sistema de tipado */

function greet(person: string, date: Date) {
    console.log(`Hello ${person}, today is ${date.toDateString()}!`);
  }

  greet("Maddison", Date());

//Argument of type 'string' is not assignable to parameter of type 'Date'.
