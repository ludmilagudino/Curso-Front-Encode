let frase = prompt('Ingrese la frase: ')

function reversa (frase){
    return frase.split('').reverse().join("").split(" ").reverse().join(" ");
}

console.log(reversa(frase));