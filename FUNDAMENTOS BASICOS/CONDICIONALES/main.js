// CONDICIONALES

if (expresion) {
    //codigo si expresion es verdadera
} else {
    //codigo si expresion es falsa
}

//SWITCH
switch( valor) {
    case opcion1:
        //codigo
    break;
    case opcion2:
        //codigo
    break;
    default:
        //codigo
}

//TERNARIO
( expresion )? codigo : codigo


//EJEMPLOS

let objeto = "enemigo";
switch(objeto){
    case "enemigo":
        console.log("Accion atacar");
    break;
    
    case "piedra":
        console.log("Accion caida");
    break;

    case "animal":
        console.log("Cocinar animal");
    break;

    default:
    console.log("Seguir camino");
}


//metodo normal

let likes = 5;

if (likes === 1){
    console.log(likes + " like");
} else {
    console.log(likes + " likes");
}

//metodo ternario

(likes === 1)? console.log(likes + " like") : console.log(likes + " likes");