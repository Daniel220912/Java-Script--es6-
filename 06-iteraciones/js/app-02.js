// Juego del pitoniso
// version con do while y break
const secretNumber = Math.floor(Math .random () *100) +1;
let intentos= 3;

do{ //DO SE EJECUTA AL MENOS 1 VEZ 
    let numeroJugador = parseInt(prompt("Introduce un numero entre 1 y 100")); 
    if(numeroJugador === secretNumber){
        alert("Has ganado!!");
        break;//SALE DEL BUCLE
    }
    alert(numeroJugador < secretNumber ? "No llegas" : "Te has pasado");
}while(--intentos);
if(!intentos) alert ("Has perdido"); 