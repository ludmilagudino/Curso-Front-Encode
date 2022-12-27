//DOM
//Para llamar por ID
const logo = document.getElementById('logo');

console.log(logo);

const logov2 = document.querySelector('#logo');

console.log(logov2);

//Para llamar por CLASES
//NO SON ARREGLOS
const item = document.getElementsByClassName('item');
//HTMLCollection(3) [li.item, li.item, li.item]

console.log(item);

const itemv2 = document.querySelectorAll('.item'); //👍
//NodeList(3) [li.item, li.item, li.item]

console.log(itemv2);

console.log(Array.isArray(item), Array.isArray(itemv2));
//no son arreglos

console.log(Reflect.has(item, 'forEach'), Reflect.has(itemv2, 'forEach'));
//querySelectorAll si se puede recorrer con forEach
console.log(Reflect.has(item, Symbol.iterator), Reflect.has(itemv2, Symbol.iterator));
//ambos son iteradores, se recorren con FOR

for (elemento of item){
    console.log(elemento);
}

for (elemento of itemv2){
    console.log(elemento);
}

//Para llamar por ETIQUETA
const links = document.getElementsByTagName('a');
const linksv2 = document.querySelectorAll('a');

console.log(links, linksv2);

//------------------------------------------------------------
//NAVEGACION

const header = document.querySelector('header');
                        //sin el All porque sabemos que hay uno solo

const hijosHeader = header.children; //👍
console.log(hijosHeader);

const hijosHeaderv2 = header.childNodes;
//cuenta los SALTOS DE LINEA como nodos
console.log(hijosHeaderv2);
