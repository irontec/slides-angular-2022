//13.Creamos una nueva clase ProUserExample extendiendo la clase existente, BasicUserExample
// En esta clase podemos usar los metodos de la clase BasicUserExample, y además podemos añadir nuevos metodos úinicos de la clase ProUserExample

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
  user: BasicUser;
  constructor (user: BasicUser){
    this.user = user;
  }

  addSkills(skill: string){
    this.user.skills.push(skill)
  }
}

const usuario3 = new BasicUserExample(usuario1);
usuario3.addSkills('gitlab')

class ProUserExample extends BasicUserExample{
  constructor(user:BasicUser){
    super(user)
  }

  changePremium(){
    this.user.isPremium = !this.user.isPremium;
  }
}

const usuario4 = new ProUserExample(usuario1);
usuario4.addSkills('gitlab')
usuario4.changePremium();

console.log(usuario4)
