//CLAUSURAS: forma de identificar como va a ejecutar ciertas lineas

function uno(){
    console.log('Funcion 1');
    let nombre = 'Marcos';
    console.log(nombre);

    return function dos(){
        console.log('Funcion 2');
        nombre = 'Lena';
        console.log(nombre);

        return function tres(){
            console.log('Funcion 3');
            let nombre = 'Maria';
            console.log(nombre);
        }
    }
}

const resultado1 = uno();
const resultado2 = resultado1();
const resultado3 = resultado2();
