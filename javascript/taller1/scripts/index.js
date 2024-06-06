let funcionElegida = parseInt(prompt("Desea sumar dos numeros (1) o desea saber si un numero es par (2)"));
if(funcionElegida==1){
    let numeroUno = parseFloat(prompt("Ingrese el primer numero: "));
    let numeroDos = parseFloat(prompt("Ingrese el segundo numero: "));
    sumar(numeroUno, numeroDos);
}else if(funcionElegida==2){
    let numeroAEvaluar = parseInt(prompt("Ingrese un numero: "));
    if(numeroAEvaluar % 2 ==0){
        alert(`El numero ${numeroAEvaluar} es par`)
    }else{
        alert(`El numero ${numeroAEvaluar} es impar`)
    }
}

function sumar(a,b){
    resultadoSuma = a+b;
    alert(`El resultado de la suma es ${resultadoSuma}`);
}