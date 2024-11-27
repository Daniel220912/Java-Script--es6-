let num1 = 20; //number
let num2 = "20"; //string

let num3 = 33.3;
let num4 = 0.4567;
let num5= -4;

//Operadores aritmeticos
let resultado;

//  LOS = NO SON OPERACIONES, EL RESULTADO SE AÑADIRA AL ANTERIOR DE =
resultado = num1 + num3;
resultado = num1 - num3;
resultado = num3 * num3; //MULTIPLICACION
resultado = num1 / num3; //DIVISION


//modulo -> resto
resultado = 20 % 10; //devuelve el resto de 20 / 10

//(Libreria) Objeto Math
resultado = Math.PI; //NUMERO PI
resultado = Math.round(2.5);//REDONDEA AL MAS CERCANO
resultado = Math.ceil (2.2);//SE VA PARA ARRIBA AL 3
resultado = Math.floor(2.8);//SE VA PARA ABAJO AL 2

resultado = Math.min(3,5,10,-1,7);//TE DEVUELVE EL NUMERO MAS PEQUEÑO:-1
resultado = Math.max (3,5,10,-1,7); //TE DEVUELVE EL NUMERO MAS GRANDE:10

resultado = Math.random();
//Generar un numero aleatorio dentro de un rango
resultado = Math.floor(Math .random() *6) +1;//SE CALCULA PRIMERO LO DEL PARENTESIS TE DA UN NUMERO DEL 1 AL 6


//Precedéncia de operadores
resultado = 20 + 30 *6; //200
resultado = (20 + 30) *6; //300
resultado = 20 +34 +56 +5;//115
resultado = resultado * 0.2;

//Incremento y decremento
let clicks = 5;  
clicks = clicks +1; // 5+1 y se guarda en clicks
clicks++; //++ SUMA UN 1 A 5
++clicks;

clicks--;
--clicks;


let total =0;
//total = total +3;
total +=3; //LE SUMA 3 A CLICKS Y LO GUARDA
total -= 4;
total *=100;
//total = total / 2;
total /= 2;
// console.log(total);


//El += se puede usar en strings
let saludo = "Hola";
saludo += " que tal";

//Funciones para convertir strings a number
const n1 = "20.7";
const n2 = "34$";
const n3 ="uno";
const n4 = 12;


console.log( typeof +n1);
console.log(parseInt (n1)); //CON PARSEINT PASA EL TEXTO A NUMERO
console.log(parseInt(n2));//NUMEROS ENTEROS 
console.log(parseFloat (n1));//NUMEROS DECIMALES
console.log(parseFloat (n3));//NO VE EL NUMERO

console.log(Number.isInteger(n1)); //ES UN NUMERO ENTERO

//Revisar si el cambio a numero ha ido bien
console.log(Number.isNaN(parseInt(n3))); 