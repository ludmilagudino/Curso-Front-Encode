//Un isograma es una palabra que no tiene letras repetidas. Comproar si el string es un isograma
//Un string vacio es un isograma

alert("¿Mi palabra es un isograma?");

let palabra =prompt('Ingrese la palabra:').toLowerCase();

let array = palabra.split('').sort();
console.log(array);

let es = false
let contEs = 0
let contNoEs = 0


for (let i=0 ; i<array.length; i++) {
    if (array[i] === array[i+1]){
        contNoEs +=1
        break;
    } 
}

if(contNoEs!=0){
    alert('Tu palabra no es un isograma!');
}else{
    alert('Tu palabra es un isograma!');
}