// 1-Escribe un programa en una sola línea que haga aparecer en pantalla un alert que diga "Hello World".

// alert(Hello World);



// 2- Escribe un programa en una sola línea que escriba en la pantalla un texto que diga "Hello
// World.


// 3- Escribe un programa en una sola línea que escriba en la pantalla el resultado de sumar 3 // + 5.
// SUMA LOS NUMEROS Y APARECE EN EL TEXTO

// document.write(3+5);


// 4- Escribe un programa de dos líneas que pida el nombre del usuario con un prompt y escriba un texto que diga "Hola nombre_usuario".
 
//  let userName = prompt("Dime tu nombre: ");
//  document.write("Hola " + userName);


// 5- Escribe un programa de tres líneas que pida un número, pida otro número y escriba el resultado de sumar estos dos números.

// let num1 = prompt("Primer numero: "); // convertir a numero       //EL TEXTO DEL PRIMER NUMERO SE GURDA EN NUM1.
// let num2 = prompt ("Segundo numero: "); //convertir a numero     //SEGUNDO NUMERO SE GUARDA EN NUM2.
// let suma = num1 + num2; //LA SUMA DE NUM 1 Y NUM 2 SE GUARDA EN SUMA.
// document.write(suma); //HACE QUE EL RESULTADO DE SUMA APAREZCA EN EL TEXTO.

// 6- Escribe un programa que pida do11s números y escriba en la pantalla cuál es el mayor.

// let num1 = prompt("Numero 1: "); //
// let num2= prompt("Numero 2: ");
// num1 = parseFloat(num1);
// num2 = parseFloat(num2);
// if(num1 > num2){
//     console.log("El numero " + num1 +" es el mayor");
// }else{
//     console.log("El numero " + num2 + " es el mayor");
// }

// 7- Escribe un programa que pida 3 números y escriba en la pantalla el mayor de los tres.

// let num1 = prompt ("Numero 1: ");
// let num2 = prompt ("Numero 2: ")
// let num3 = prompt ("Numero 3: ");
// num1 = parseFloat(num1);
// num2 = parseFloat(num2);
// num3 = parseFloat(num3);
// let numeroMayor = num1;
// if (num2 > numeroMayor ){
//     numeroMayor = num2;   
// } if (num3 > numeroMayor){
//     numeroMayor = num3;
// }
// console.log(" El numero " +  numeroMayor + " es el mayor ");


// 8- Escribe un programa que pida un número y diga si es divisible por 2.

// let a = prompt ("Numero 1: ");
// // "si (a % 2 === 0) -> es par sino es impar"
// if(a % 2=== 0){
//     alert ("Par");
// } else{
//     alert("Impar");
// }


//modificar el codigo para permitir solo 3
// intentos
const pin = "1234";
let respuesta = "";
let intentos = 3;

while (respuesta !== pin && intentos > 0){
    respuesta = prompt ("Escribe un pin");
    intentos--;
}
if( respuesta === pin){
    alert("Has acertado!!!");
}else{
alert("No tienes mas intentos");
}

// 9- Escribe un programa que pida una frase y escriba cuántas veces aparece la letra "a".
// 10- Escribe un programa que pida una frase y escriba las vocales que aparecen.
// 11- Escribe un programa que pida una frase y escriba cuántas de las letras que tiene son
// vocales.
// 12- Escribe un programa que pida una frase y escriba cuántas veces aparece cada una de
// las vocales.
// 13- Escribe un programa que pida un número y nos diga si es divisible por 2, 3, 5 o 7 (solo
// hace falta comprobar si lo es por uno de los cuatro).
// 14- Añade al ejercicio anterior que nos diga por cuál de los cuatro es divisible (debe decir
// todos aquellos por los que sea divisible).
// 15- Escribe un programa que escriba en pantalla los divisores de un número dado.
// 16- Escribe un programa que escriba en pantalla los divisores comunes de dos números
// dados.
// 17- Escribe un programa que nos diga si un número dado es primo (no es divisible por
// ningún otro número que no sea él mismo o la unidad).