//FUNCIONES ANONIMAS: no tienen nombre
//que se ejecute en ese momento
otrFuncion (function(param1, param2){
    //codigo
});

//DEFINICION
( function(){
    //codigo
});

//EJECUCION
( function(){
    //codigo
})();
//abrir y cerrar parentesis para llamar a funcion anonima

//----------------------------------------------------------------
//FUNCIONES FLECHAS: para las anonimas o nombradas
const iniciarUI = (param1, param2) => {
    //codigo
}

//FUNCION NORMAL
function saludo(nombre){
    return 'Hola,' + nombre;
}

//MISMA FUNCION PERO FLECHA
const saludo = nombre => 'Hola,' + nombre;

//EJEMPLO DEMO
const GradosCak = (valor) =>{
    return valor * 274.15;
}

//si es una sola variable puedo eliminar el parentesis
const GradosCak2 = valor =>{
    return valor * 274.15;
}