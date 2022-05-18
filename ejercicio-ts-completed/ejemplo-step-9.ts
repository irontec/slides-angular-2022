//8. Definimos una función 'getSkillsList' que solo acepte un objeto de tipo BasicUser

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
