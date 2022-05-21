//5. Definimos una interface llamada BasicUser siguiendo la estructura de 'basicUser' definida anteriormente (asignamos un tipo a cada propiedad de BasicUser)

interface BasicUser {
  id: number,
  name: string,
  street: string,
  city: string,
  age: number,
  isPremium: boolean,
  skills: string[]
}
