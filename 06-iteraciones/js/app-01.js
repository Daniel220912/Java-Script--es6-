//sirven para repetir pasos
//mientras se cumpla una condición

// let intentos = 0;
// while (intentos < 6){
//     alert("Has clicado + intentos + "veces!);
//     intentos++;
// }


// let intentos = 0;
// while(true){
//     alert("Has clicado " + intentos + " veces!" );
//     clicks = clicks + 1; //clicks = clicks + 1;
// }

const pin = "1234";
let respuesta = "";

while (respuesta !== pin){
    respuesta = prompt("Escribe un pin");
}

alert("El pin es correcto!!!");