//FUNCIONES

//Nombre de funcion
function InciarUI(param1, param2) {
    //codigo
}


//Nombre de variable
const InciarUI = function(param1, param2){
    //codigo
}

//NaN = not a number

function multiplicar(numero01, numero02){
    if (NaN(numero01) || NaN(numero02)){
        throw new Error('Los parametros deben ser numeros: ')
    }

    const respuesta = numero01 * numero02;
    console.log(`Respuesta: ${respuesta}`)
}

multiplicar('5a', '9')

//ARGUMENTOS

function suma(...numeros){
    //... = puede pasarle a la funcion mas de 1 valor
    let res = 0;
    for (let i=0; i<numeros.length; i++){
        res += numeros[i]
    }
    return res;

}

//EJEMPLO ARGUMENTOS DE FUNCIONES

function area (figura = 'cuadrado', base = 0, altura = 0){
    switch (figura) {
        case 'cuadrado':
        
            break;
        
        case 'triangulo':

            break;


            case 'triangulo':

            break;
        
        default:
            break;
    }
}
