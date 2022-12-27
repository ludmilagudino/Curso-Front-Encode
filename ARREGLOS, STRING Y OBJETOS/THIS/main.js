//THIS
//Hace referencia al objeto que lo contiene pero el valor depende de cómo se use

// let post = {
//     likes = 160,
//     gesLikes: function(){
//         return this.likes " likes";
//     }
// };

// let edad = 10;
// let nombre = 'John';

// console.log(edad, nombre);

// this.nombre = 'Jessica';
// this.edad = 40;

// console.log(this.nombre, this.edad);

// const usuario = {
//     id: 5,
//     nombre: 'Sarah',
//     saludo: function(){
//         return `Hola, ${this.nombre}`;
//     },

//     getEdad: () => {
//         return this.edad;
//     }
// }

// console.log(usuario);

// console.log(usuario.saludo());
// console.log(getEdad());

//CALL, APPLY Y BIND

const user = {
    name: 'Marcos'
};

const business = {
    name: 'Headbook'
};

function showInfo(likes, friends){
    return `${this.name} tiene ${likes} likes y ${friends} amigos`; 
}

console.log(showInfo.call(business, 4 ,8));
//llama por parametro a la funcion business para que sepa donde buscar el this

console.log(showInfo.apply(user, [6, 9]));
//lo mismo pero los parametros se llaman como un arreglo

const newFunction = showInfo.bind(user);
//regresa funcion despues de haber asociado el objeto para que sepa como manejar el this

console.log(newFunction(10, 15));