//comillas dobles
let producto = "Monitor de '23' pulgadas";
producto = 'Monitor de "23" pulgadas';

producto = 'Moni\\tor de \"23\" pul\ngad\tas';
//N SALTO DE LINEA //T ES TABULADO

//saber la longitud de un string //NUMERO DE CARACTERES
console.log(producto.length) 

//ECMASCRIPT 2015 -> let const... template stings
producto = "Teclado USB";
const precio= "180€";
// let oferta = producto + ", tiene un "
// + "precio de " + precio;
let oferta = `El producto ${producto},
              tiene un precio de ${precio}
              La suma de 1 + 2 es : ${1 + 2}`;
let p1 = "Tele";
let p2 = "Telefono";
let p3 = "Calculadora";
let nombre = "Flujencio";

let lista = `<h1>${nombre}</h1>
                <ul>
                <li>${p1}</li>
                <li>${p2}</li>
                <li>${p3}</li>
                </ul>`;
console.log(oferta);
document.write(lista);

//Métodos para strings

//conocer su longitud
const saludo = "Hola caracola, que ase!" //APARECERAN 23 CARACTERES
console.log(saludo.length);
console.log(saludo[0]); //Letra H
console.log(saludo[3]); //Letra a
console.log(saludo[saludo.length -1]); //Te enseña la ultima letra de la frase(serian 23 caracteres -1)
let i = 0; //Empieza desde el principio
while(i < saludo.length -1){
   console.log (saludo[i]);
   //imprimir mensaje al encontrar una a
   if(saludo [i] === "a"){
    console.log("he econtrado una a en la  posicion " + i); 
   }
   i++;
}
//METODOS
console.log(saludo.indexOf("caracola")); 
console.log(saludo.includes("caracola"));
console.log(saludo.charAt(3));
console.log(saludo.charCodeat);
// console.log(saludo);

let userName = "            Mafalda  ";
let userNameFiltered = userName.trim() .toLocaleLowerCase(); // QUITA LOS ESPACIOS AUTOMATICAMENTE
// userNameFiltered = userNameFiltered.toLocaleLowerCase();//LO CONVIERTE EN MINUSCULA

//TODO mas metodos