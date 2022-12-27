//MAP: Maneja valores únicos de cualquier tipo

let calificaciones = new Set();

//agrega elementos al conjunto
calificaciones.add(10);
//EL INDICE HACE REFERENCIA AL MISMO VALOR DE LA CASILLA
calificaciones.add(8);
calificaciones.add(5);
calificaciones.add(10);
//no lo agrega porque ya esta
console.log(calificaciones);

let elementos = calificaciones.entries();

elementos.next().value; //[10,10]

console.log(elementos);