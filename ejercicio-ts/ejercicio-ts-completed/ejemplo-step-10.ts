//10. Tenemos un nuevo tipo de usuario, con los mismos campos que BasicUser, pero además con una propiedad 'points'
//Creamos una nueva interfaz llamada ProUser

type id = number | string;

interface BasicUser {
  id: id,
  name: string,
  street: string,
  city: string,
  age: number,
  isPremium: boolean,
  skills: string[]
}

interface ProUser extends BasicUser {
  points: number
}

const usuario1: BasicUser = {
  id: 1789,
  name: 'Rita',
  street: 'Done Bikendi Plaza, 2, piso 1º, 48001 Bilbo, Bizkaia',
  city: 'Bilbao',
  age: 33,
  isPremium: true,
  skills: ['angular', 'typescript']
}

function getSkillList(user:BasicUser, text?:string){
  text ? console.log(`${text} ${user.name} son ${user.skills}`): console.log(`Las skills de ${user.name} son ${user.skills}`)
}

getSkillList(usuario1, 'Las habilidades más destacadas de');


