//6. El ID puede ser un número o string, creamos un tipo (type) 'Id' y lo referenciamos en la propiedad 'id' de BasicUser

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
