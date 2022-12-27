//DESESTRUCTURACION
//Forma de extraer las propiedades de un objeto y asignarlas a variables

let kk = {
    altura: 160,
    color_pelo: "blanco"
};

// let altura = kk.altura;
// let colorPelo = kk.color_pelo;

//DESESTRUCTURACION

let {altura, colorPelo} = kk
    //indices

//DEMO

const usuario = {
    id: 5,
    nombre: 'Ramiro',
    edad: 38,
    habilidades: [
        {
            id: 0,
            nombreHabilidad: 'programacion'
        },
        {
            id: 1,
            nombreHabilidad: 'canto'
        }
    ]
};

const { id, nombre, habilidades } = usuario;
console.log(id, nombre, habilidades);

const [habilidad01, habilidad02] = habilidades;

console.log(habilidad01, habilidad02);