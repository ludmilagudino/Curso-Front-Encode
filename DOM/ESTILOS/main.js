//MODIFICAR ESTILOS DOM

const boton = document.querySelector("#boton");

boton.style.backgroundColor = 'blue';
boton.style.color = '#fff';
boton.style.padding = "20px";
boton.style.background = 'linear-gradient(270deg, rgba(245, 40, 145, 0.8) 0%, rgba(102, 24, 222, 0.51) 100%)'
boton.style.borderColor = 'rgba(102, 24, 222, 0.51)';


//MODIFICAR CLASES

const boton02 = document.querySelector("#boton02");

//mostrar clases
console.log(boton02.classList);

//añadir clase
boton02.classList.add('boton');
boton02.classList.add('boton-estilo01');
//eliminar clase
boton02.classList.remove('boton');
//si no esta la añade, si esta la elimina
boton02.classList.toggle('boton-estilo02');
//valida si esta la clase
console.log(boton02.classList.contains('boton'));
console.log(boton02.classList.contains('boton-estilo01'));