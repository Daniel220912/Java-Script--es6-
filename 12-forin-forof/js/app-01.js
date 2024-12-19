
/*Bucles
- while
- do while
- for
- Metodos de arrays: foreach, map , filter...

-for in
-for of
*/

const persona = {
   nombre: "Juan",
   apodo: "El trinchador asesino",
   edad: 30,
   profesion: "herrero",
   meritos: ["Ganador de forjado a fuego 2023", "sus cuchillos cortan mucho"]
}

for(let prop in persona){  
   console.log(`Propiedad: ${prop} es ${persona[prop]}`); //EL PRIMER PROP TE MUESTRA NOMBRE, PROFESION...
   //EL SEGUNDO PROP TE MUESTRA LOS DATOS DE DENTRO: JUAN, EL TRINCHADOR...     
}


//for of