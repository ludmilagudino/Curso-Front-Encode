// //GENERADORES: forma de tener una funcion que se va a ejecutar pero va a guardar un estado, 
// //en un punto podemos reanudar la ejecucion

// //añadir asterisco para que sepa que es un generador
// function* secuencia(){
//     yield 1;
//     yield 2;
//     yield 3;
//     return 4;
// }
// //YIELD: que el generador se tiene que detener en esa linea

// let generator = secuencia();

// let uno = generator.next();
// //cuando se vuelve a llamar la funcion .next continua la ejecucion
// //si existe otro yield va a detener la ejecucion y espera otro .next
// let dos = generator.next();


//EJEMPLO
function* nombre(){
    yield 'Juan';
    yield 'Maria';
    yield 'Sergio';
    yield 'Ari';
    yield 'Marcos';
}

const iterator = nombre();

// console.log(iterator.next().value);
// //solo guarda el valor del generador
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());

// let valor = iterator.next();
// while(valor.done !== true){
//     console.log(valor.value);
//     valor = iterator.next;
// }

for (const item of iterator){
    console.log(item);
}

function* numero(){
    let contador = 0
    while(true){
        yield contador;
        contador++;
    }
}

const iterator2 = numero()

console.log(iterator2.next().value);
console.log(iterator2.next().value);
console.log(iterator2.next().value);
console.log(iterator2.next().value);
console.log(iterator2.next().value);