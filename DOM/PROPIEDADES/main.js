//PROPIEDADES IMAGENES
//hacer referencia al html
let foto = document.querySelector("#foto")

//mostrar valor de propiedad
console.log(foto.width, foto.getAttribute("width"));

console.table ([
    {
        prop: foto.width,
        tipo: typeof foto.width
    },
    {
        prop: foto.getAttribute("width"),
        tipo: typeof foto.getAttribute("width")
    }
]);

//cambiar propiedades
foto.setAttribute('width', '100%')

//PROPIEDADES DE TEXTOS
//hacer referencia al html
const boton = document.querySelector("#boton");

//mostrar texto
console.log(boton.textContent);

//cambiar texto
boton.textContent = "Hola a todos!";
boton.setAttribute('class', 'boton-principal');

console.log(boton.textContent);
