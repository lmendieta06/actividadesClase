console.log("Estoy conectado a mi html");
// EJERCICIO 1
/*
1.) Verificación de elegibilidad para votar:
Escribe un programa que solicite la edad de un usuario y verifique si es elegible para votar en las elecciones. Debe ser mayor de 18 años y ser ciudadano colombiano.
*/

/*
    1. Tener el problema
    2. Analizar.
    3. Diseñar - Saber como lo va a hacer-
    4. Desarrollar.
*/

let edad =  parseInt(prompt("Por favor ingrese su edad"));
// Usar variables con esta estructura cuando sean booleanos
// Ventana de confirmacion
let esCiudadano = confirm("¿Es usted ciudadano colombiano?"); 

console.log(edad, esCiudadano);

if(edad>=18 && esCiudadano == true){
    alert("Eres elegible para votar en las proximas elecciones");
}else{
    alert("No eres elegible para las proximas elecciones");
}