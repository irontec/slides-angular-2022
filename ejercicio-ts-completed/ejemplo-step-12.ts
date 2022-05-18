//12. Creamos una clase BasicUserExample
//La clase recibe un usuario, de tipo BasicUser,
//además tiene un metodo 'addSkills' que añade un skill de tipo string al array de skills del usuario

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

const usuario2: ProUser = {
  id: 1898,
  name: 'Juan',
  street: 'Gran Vía, 2, piso 1º, 48001 Bilbo, Bizkaia',
  city: 'Bilbao',
  age: 25,
  isPremium: false,
  skills: ['react', 'vue'],
  points: 100
}

class BasicUserExample{
  user: BasicUser = null;
  constructor (user: BasicUser){}

  addSkills(skill: string){
    user.skills.push(skill)
  }
}

const usuario3 = new BasicUserExample(usuario1);
usuario3.addSkills('gitlab')

console.log(usuario3)
