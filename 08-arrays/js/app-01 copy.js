//Arrays literal
const numberList = [12, 34, 56, 79, 98];
const mix = [12, "hola", true , null];

//Constructor
const frutas = ["Manzana", "Peras", "Naranja"];
let x;
//Obtener el valor de un elemento del array
x = numberList[3];
x = numberList[1] + numberList[3];
x = `Mi fruta preferida es ${frutas[2]}`;
x = frutas.length; //SALDRAN TODAS LAS FRUTAS
frutas[0] = "fresa";
frutas[frutas.length] = "piña";
frutas[frutas.length] = "cacahuetes";

let verdura = "col";
let verduraPreferida = verdura;
verdura = "patata";

console.log("verdura vale", verdura);
console.log("preferida vale", verduraPreferida);

const deportes = ["futbol", "padel","baloncesto"];
const deportesFavoritos = deportes;   //No podemos copiar arrays directamente   //Hace una copia del principio, si mas adelante modificio la inicial, cambiará esta tambien
deportes[deportes.length] = "golf";


console.log("Lista de deportes", deportes);
console.log("Lista de deportes favoritos", deportesFavoritos);


