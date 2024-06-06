// Entrada = (prompt)
// Salida = alert o console.log()
// Para hacer operaciones hay que poner el parse, el prompt recibe las variables en string
// let numeroUno = parseInt( prompt("Ingrese un numero"));
// let numeroDos = parseInt( prompt("Ingrese un numero"));
// let resultadoSuma = numeroUno + numeroDos;
// let resultadoResta = numeroUno - numeroDos;
// let resultadoMultiplicacion = numeroUno * numeroDos;
// let resultadoDivision = numeroUno / numeroDos;
// alert("La suma de " + numeroUno + " y " + numeroDos + " es igual a: " + resultadoSuma);
// alert("La resta de " + numeroUno + " y " + numeroDos + " es igual a: " + resultadoResta);
// alert("El producto de " + numeroUno + " y " + numeroDos + " es igual a: " + resultadoMultiplicacion);
// alert("La division de " + numeroUno + " y " + numeroDos + " es igual a: " + resultadoDivision);

// ----------- Operadores --------------
// let peso = parseInt(prompt("Ingrese su pego en kg"));
// let altura = parseInt(prompt("Ingrese su altura en cm"));
// let resultadoIMC = peso/(altura*altura);
// alert(resultadoIMC);
// console.log(resultadoIMC);

// ---------- Condicionales y operadores relacionales -----------------
    // let nombreUsuario = prompt("Ingrese su nombre: ");
    // let edadUsuario = parseInt(prompt("Ingrese su edad: "));

    // if(edadUsuario>=0 && edadUsuario<=12){
    //     console.log(`${nombreUsuario} eres un niño`);
    // }else if(edadUsuario>=13 && edadUsuario<=17){
    //     console.log(`${nombreUsuario} eres un adolescente`)
    // }else if(edadUsuario>=18 && edadUsuario<=64){
    //     console.log(`${nombreUsuario} eres un adulto`)
    // }else if(edadUsuario>=65){
    //     console.log(`${nombreUsuario} eres un adulto mayor`)
    // }else{
    //     console.log(`${nombreUsuario} Ingresa un dato valido, numero mayor o igual a 0`)
    // }

// --------- CONTINUACION RETO 2 --------------
// ENTRADA
let nombre = prompt("Ingresa tu nombre: ");
let peso = parseInt(prompt("Ingrese su peso en kg: "));
let altura = parseInt(prompt("Ingrese su altura en cm: "));
// PROCESO
let resultadoIMC = (peso/(altura*altura))*10000;
// El toFixed(2) es lo que hace que solo se vean dos decimales en este caso
console.log(resultadoIMC); + resultadoIMC.toFixed(2)
if(resultadoIMC.toFixed(2) < 18.5){
    alert(nombre + " Bajo de peso " + "tu peso es " + resultadoIMC.toFixed(2));
}else if(resultadoIMC.toFixed(2)>=18.5 && resultadoIMC.toFixed(2)<=24.9){
    alert(nombre + " Peso normal " + "tu peso es " + resultadoIMC.toFixed(2));
}else if(resultadoIMC.toFixed(2)>=25 && resultadoIMC.toFixed(2) <= 29.9){
    alert(nombre + " Sobrepeso " + "tu peso es " + resultadoIMC.toFixed(2));
}else if(resultadoIMC.toFixed(2)>=30 && resultadoIMC.toFixed(2) <= 34.9){
    alert(nombre + " Obesidad I " + "tu peso es " + resultadoIMC.toFixed(2));
}else if(resultadoIMC.toFixed(2)>=35 && resultadoIMC.toFixed(2)<=39.9){
    alert(nombre + "  Obesidad II " + "tu peso es " + resultadoIMC.toFixed(2));
}else if(resultadoIMC.toFixed(2)>=40 && resultadoIMC.toFixed(2)<=49.9){
    alert(nombre + " Obesidad III " + "tu peso es " + resultadoIMC.toFixed(2));
}else if(resultadoIMC.toFixed(2)>50){
    alert(nombre + " Obesidad IV " + "tu peso es " + resultadoIMC.toFixed(2));
}else{
    alert("Error en la aplicacion");
}

