/*
Juego de adivinanza:
Escribe un programa que genere un número aleatorio entre 1 y 100 y pida al usuario que
lo adivine. Indica si el intento es demasiado alto o bajo hasta que el usuario adivine el
número correcto.
*/
// La funcion random solo da valores mayores a 0 y menores a 1 asi que se multiplica por 100 y se le suma 1
let numeroAleatorio =  parseInt(Math.random()*100)+1;
alert("¡VAMOS A HACER UN JUEGO DE ADIVINANZAS! \n Ingresa un numero del 1 - 100, debe ser un entero");
let adivinanza = 0;

do{
    adivinanza = parseInt(prompt("¿Que numero crees que es?"));
    if(adivinanza>numeroAleatorio){
        alert("El numero que diste es mayor al que estas buscando");
    } else if(adivinanza<numeroAleatorio){
        alert("El numero que diste es menor al que estas buscando");
    } else{
        alert("¡ADIVINASTE!");
    }
}while(adivinanza!=numeroAleatorio);