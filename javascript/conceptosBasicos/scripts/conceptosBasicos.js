// 1. Verificar que la vinculacion este correcta
// Enviar un mensaje

console.log("Hola mundo - Estoy vinculado con mi HTML");

// DEFINICION DE VARIABLES: Espacio de memoria de un dato que se usará constantemente.
/* 
    TIPOS DE DATOS.
    1. numerico -> cualquier tipo de numero.
    2. texto (strings).
    3. booleanos.
    4. arreglos.
    5. objetos.
*/

/* 
    VARIABLES EN JS

    1. VAR -> Guarda datos que pueden cambiar en el tiempo (en desuso - NO SE USA ACTUALMENTE)
    2. LET -> Guarda datos que pueden cambiar con el tiempo 
    3. CONST -> Guarda constantes
*/

// 2. DECLARACION DE VARIABLES

let nombreVariable = "nombre";

// Numericos

let numero = 5;

const pi = 3.14;

// texto

let texto = "holaaa";

// booleanos

let isTrue = true;

// arreglos

let arreglo = [1,2,3,4];

// Programacion orientada a objetos POO
// Objeto -> Son una representacion en codigo de un objeto en la vida real para que podamos darles instrucciones logicas.
// Todos los elementos de la vida real se pueden definir en terminos de atributos y metodos.
/*
    [] -> Arreglos de datos
    {} -> Tipos de dato objeto
    () -> Metodos
*/
// EJEMPLO DE PERSONA
/* 
    Estructura clave valor
*/
let persona1 = {
    // clave:valor
    // ATRIBUTOS
    // La coma se pone al final de cada atributo
    nombrePersona : "Laura", 
    edad: 19, 
    altura : 165,
    nacionalidad :  "Colombiana",
    // METODOS
    // Los diferentes metodos se separan por comas
    // Para llamar el producto en consola se pone persona1.saludad()
    // SIEMPRE PONER LOS PARENTESIS PARA LLAMAR
    saludar: function(){
        console.log("Hola");
    },
    // Esto es una funcion anonima, ya que la funcion como tal no tiene nombre
    despedir: function (){
        console.log("Chao");
    }
}

let producto = {
    nombre:"papas",
    precio:5000,
    tipo:"comida",
    cantidad:20,

    comprar:function(){
        console.log(`Se vendio el producto ${this.nombre}`);
    }
}

// -------------------FUNCIONES------------------
/*
    USO DE FUNCIONES EN JS
    1. Declaracion tipica 
    2. Funcion anonima
    3. Funciones flecha -> Estandares modernos de programacion en js
    4. Funciones incorporadas -> Funciones de js

*/

// Declaracion basica
/*
    function nombre(){

    }
*/

function saludar(){
    console.log("Holaaaa");
}

// Funcion anonima

let despedida = function(){
    console.log("Adiooooooos");
}

// Funciones flecha
let suma = () => {
    console.log(5+4);
}

// Funciones incorporadas
/*
    ALERT
    PROMPT
    PARSEINT
    PARSEFLOAT
    CONSOLE
    TOFIXED
    MATH
*/