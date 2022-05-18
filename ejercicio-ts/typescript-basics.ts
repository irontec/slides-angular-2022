
/**
  ==============
  PRÁCTICA  - TypeScript
  ==============
*/

//Empezar con el archivo en .js
//Ejemplo sin typescript

const basicUser = {
  name: 'Rita',
  street: 'Done Bikendi Plaza, 2, piso 1º, 48001 Bilbo, Bizkaia',
  city: 'Bilbao',
  age: 33,
  isPremium: true,
  skills: ['angular', 'typescript']
}

console.log(basicUser.surname); //undefined


//---1. Ejecutar node <nombre-del-archivo>.js

//---2. Pasamos el archivo a .ts

  //Visual studio soporta TypeScript pero no incluye el compilador de TypeScript,
  //necesario para transpilar TypeScript a JavaScript

//---3. Instalamos TypeScript ejecutando: npm install -g typescript
//---4. Compilamos ejecutando: tsc <nombre-del-archivo>.ts

  //Ahora obtenemos un error de TypeScript, ya que 'surname' no existe en el tipo {  name: 'Rita',  street:e..}

  //Typescript es capaz de inferir los tipos de las propiedades en el objeto 'basicUser'
  //(Se puede ver colocando el cursor sobre 'basicUser')

  console.log(basicUser.surname);

//---4. CInstalar ts-node

//...Object types, primitive types
//---5. Definimos una interface llamada BasicUser siguiendo la estructura de 'basicUser' definida anteriormente (asignamos un tipo a cada propiedad de BasicUser)
//---6. El ID puede ser un número o string, creamos un tipo (type) 'Id' y lo referenciamos en la propiedad 'id' de BasicUser


//---7. Definimos un usuario usando el type 'BasicUser'

//...Functions
//---8. Definimos una función 'getSkillsList' que solo acepte un objeto de tipo BasicUser
//---9. Pintamos en consola los skills de 'rita' (podemos pasar un texto opcional al inicio)



//10. Tenemos un nuevo tipo de usuario, con los mismos campos que BasicUser, pero además con una propiedad 'points'
//Creamos una nueva interfaz llamada ProUser



//11. Creamos un usuario de tipo ProUser



//10. Creamos una clase BasicUserExample
//La clase recibe un usuario, de tipo BasicUser,
//además tiene un metodo 'addSkills' que añade un skill de tipo string al array de skills del usuario


//11.Creamos una nueva clase ProUserExample extendiendo la clase existente, BasicUserExample
// En esta clase podemos usar los metodos de la clase BasicUserExample, y además podemos añadir nuevos metodos úinicos de la clase ProUserExample




