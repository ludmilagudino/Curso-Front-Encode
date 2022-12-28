// //DOM
// let div = document.getElementById("aplicacion");

// //muestra html dentro de la etiqueta
// console.log(div.innerHTML);

// //muestra solo el texto
// console.log(div.innerText);

// let perritos = document.getElementsByClassName("perritos");

// console.log(perritos[0].innerHTML);
// console.log(perritos[1].innerHTML);
// console.log(perritos[2].innerHTML);

// let divs = document.getElementsByTagName("div");
// console.log(divs[0].innerHTML);
// console.log(divs[1].innerHTML);
// console.log(divs[2].innerHTML);

// let perritos = document.getElementsByClassName("perritos");

// //recorrer html colection
// for ( const perrito of perritos){
//     console.log(perrito.innerHTML);
// }

// let saludo = document.getElementById("saludo");
// //cambiar texto desde javascript
// //se le puede añadir etiquetas html

// let seccion = prompt("Ingrese la seccion a visitar")

// if(seccion == "carrito"){
//     saludo.className = "rosa";
//     saludo.innerHTML = "<h1> Bienvenido al carrito </h1>";
// } else if(seccion == "favoritos"){
//     saludo.className = "amarillo";
//     saludo.innerHTML = "<h1> Bienvenido a los favoritos</h1>";
// } else{
//     saludo.className = "celeste";
//     saludo.innerHTML = "<h1> Bienvenido a nuestra pagina</h1>"
// }


// //1° creacion de nodos
// let parrafo = document.createElement("p");

// //2° asignacion de contenido
// parrafo.innerHTML = "<h1>Hola a todos</h1>"

// //3° con el append agrego al body el elemento
// document.body.append(parrafo);

// //eliminar elementos de html
// let contenedor = document.getElementById("contenedor");
// const nombres = ["ema", "caro", "fabian", "andres"];

// nombres.forEach(nombre => {
//     let li = document.createElement("li");
//     li.innerHTML = nombre;
//     contenedor.append(li);
// })

//EJEMPLO DE MOSTRAR PRODUCTOS

let contenedor = document.getElementById("contenedor");

const productos = [
    { id:1 , nombre: "camisa" , precio: 1000},
    { id:2 , nombre: "zapato", precio: 700},
    { id:3 , nombre: "gorra" , precio: 1350},
    { id:4 , nombre: "pantalon", precio: 500},

];

productos.forEach(producto => {
    let div = document.createElement("div");
    div.innerHTML = `
    <h2>ID: ${producto.id}</h2>
    <p>Nombre: ${producto.nombre}</p>
    <b>$${producto.precio}</b> 
    `;

    contenedor.append(div);
});