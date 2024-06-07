// Verificar si esta vinculado
console.log("Estoy vinculado a mi HTML");

// Manipular elementos de HTML desde JS, lo primero es traer esos alementos
// TRAES ELEMENTOS DE HTML

//  Variable global
let numero1;
let numero2;
let pantalla = document.getElementById("pantalla");
let resultado = 0;


function suma(){

    numero1 = parseFloat(document.getElementById("numero1").value);
    numero2 = parseFloat(document.getElementById("numero2").value);

    // Variable local
    let resultado = numero1 + numero2;
    // el textContent me modifica el contenido del texto de mi elemento
    pantalla.textContent = resultado.toFixed(3);
}

function resta(){
    numero1 = parseFloat(document.getElementById("numero1").value);
    numero2 = parseFloat(document.getElementById("numero2").value);

    // Variable local
    let resultado = numero1 - numero2;
    // el textContent me modifica el contenido del texto de mi elemento
    pantalla.textContent = resultado.toFixed(3);
}

function multiplicacion(){
    numero1 = parseFloat(document.getElementById("numero1").value);
    numero2 = parseFloat(document.getElementById("numero2").value);

    // Variable local
    let resultado = numero1 * numero2;
    // el textContent me modifica el contenido del texto de mi elemento
    pantalla.textContent = resultado.toFixed(3);
}

function division(){
    numero1 = parseFloat(document.getElementById("numero1").value);
    numero2 = parseFloat(document.getElementById("numero2").value);

    // Variable local
    let resultado = numero1 / numero2;
    // el textContent me modifica el contenido del texto de mi elemento
    pantalla.textContent = resultado.toFixed(3);
}
