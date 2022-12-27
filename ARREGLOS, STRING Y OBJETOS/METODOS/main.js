//ARREGLOS

let calificaciones = [56, 66, 78, 99, 21];

calificaciones[20] = 100;
console.log(calificaciones[18]);
console.log(calificaciones);
console.log(calificaciones.length);

for(let i=0; i< calificaciones.length; i++){
    console.log(calificaciones[i]);
}

for (calificacion of calificaciones){
    console.log(calificacion);
}

//METODOS DE ARREGLOS AVANZADOS
let calificaciones2 = [[6,8], [9,10], [9,7]];

let resultado = calificaciones2.flat();
console.log(resultado);

//----------------------------------------------------------------

const calificaciones3 = [10, 7, 4, 6, 2, 8];
const mensajes = ['Hola', 'al', 'curso', 'de', 'JavaScript'];
console.log(calificaciones3);

//FOREACH: loop for, hace recorrido de los elementos
calificaciones3.forEach(function(value, i){
    console.log(value, i);
})


//MAP: operacion de transformacion, cambio en los elementos de una array y al final de estas operaciones para tener una nueva lista con la misma cantidad de elementos que la lista base.
const respuestaMap = calificaciones3.map((valor, indice) => {
    return valor * 10;
})

console.log(respuestaMap);


//REDUCE: ejecuta una función reductora sobre cada elemento de un array, devolviendo como resultado un único valor.
const suma = calificaciones3.reduce((acumulador, valor) =>{
    return acumulador += valor;
},0)

console.log(suma);

//FILTER: filtrar arreglo basado en una condicional. Los elementos que cumplan con la condicional se añaden al arreglo de respuesta

const filterClasificaciones = calificaciones3.filter (calificacion => {
    return calificacion < 5;
})

console.log(filterClasificaciones);

//FIND: busca un elemento dentro de un array y retorna el primero que cumpla con la condición 
const findClasificaciones = calificaciones3.find(calificacion => {
    return calificacion > 5;
})

console.log(findClasificaciones);

//SOME: regresa valor booleano (true or false) si se cumple la validacion
const someClasificaciones = calificaciones3.some(calificacion => {
    return calificacion = 10;
})

console.log(`some ${someClasificaciones}`);

//FLAT: crea una nueva matriz con todos los elementos de sub-array concatenados. se le puede aclarar el numero de niveles que quiero que aplane
 const parciales = [[10, 8],[7, 5], [10, 10]];
 const output = parciales.flat();

 console.log(parciales);
 console.log(`flat ${output}`);
 

 //SORT:ordena los elementos de un arreglo localmente y devuelve el arreglo ordenado. La ordenación no es necesariamente estable. 
 
 const sortCalificaciones = calificaciones3.sort();
// El modo de ordenación por defecto responde a la posición del valor del string de acuerdo a su valor Unicode (tabla de caracteres)
 console.log(sortCalificaciones);


//compara dos valores para determinar cual es mayor o menor, o igual
 const sortCalificaciones2 = calificaciones3.sort((a, b) => {
    if(a < b) return -1;

    if(a > b) return 1;

    return 0;
 });

console.log(sortCalificaciones2);

//ordena alfabeticamente

const sortMensaje = mensajes.sort((a, b) => {
    if(a[1] < b[1]) return -1;

    if(a[1] > b[1]) return 1;

    return 0;
})

console.log(sortMensaje);

 
















