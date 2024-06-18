console.log("Estoy conectada a mi html");
// Ejercicios de condicionales
/*
2.) Calculadora de descuento:
Crea un programa que solicite al usuario el precio original de un producto y el porcentaje de descuento que se aplicará. Luego, calcula y muestra el precio final después del descuento. 

    LISTA DESCUENTOS
    1. 20%
    2. 50%
    3. 75%
*/

const precioProducto = parseFloat(prompt("Ingrese el valor del producto"));
// Para sacar la barra Altgr + ?  ( \n Funciona para hacer saltos de linea)
let descuento = prompt("Defina el descuento que quiere aplicar: \n 1. 20% \n 2. 50% \n 3. 75% \n Elija una sola opcion (1, 2 , 3)");
let precioTotal = 0;

// Estructura de switch

switch(descuento){

    case '1':
        precioTotal = precioProducto - (precioProducto * 0.2);
        alert("El precio de su producto aplicandole el descuento del 20% es: " + precioTotal);
        // Cerrar caso
        break;
    
    case '2':
        precioTotal = precioProducto - (precioProducto * 0.5);
        alert("El precio de su producto aplicandole el descuento del 50% es: " + precioTotal);
        break;

    case '3':
        precioTotal = precioProducto - (precioProducto * 0.75);
        alert("El precio de su producto aplicandole el descuento del 20% es: " + precioTotal);
        break;
    
    default:
        alert("Digite una opcion valida");
}