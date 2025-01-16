let out;
out = document.all; // Devuelve un array con todos los elementos del DOM (HTMLCollection) que son los elementos en array
out = document.all[11]; // Devuelve el elemento con el índice 11 en este caso el h1
out = document.all.length; // Devuelve la cantidad de elementos en el DOM

//Todo el documento html
out = document.documentElement; // Devuelve el html
out = document.body; // Devuelve el body
out = document.head; // Devuelve el head
out = document.head.children; // Devuelve los hijos del head
out = document.body.children; // Devuelve los hijos del body

//Algunas propiedades random
out = document.URL; // Devuelve la URL
out= document.characterSet; // Devuelve el tipo de codificación
out = document.contentType; // Devuelve el tipo de contenido

//Obtener los formularios
out = document.forms; // Devuelve un array con los formularios
out = document.forms[0]; // Devuelve el primer formulario
out = document.forms[0].id; // Devuelve el id del primer formulario
out = document.forms[0].method; // Devuelve el método del primer formulario
out = document.forms[0].action; // Devuelve la acción del primer formulario

//Obtener los enlaces
out = document.links; // Devuelve un array con los enlaces

const enlaces = document.links
for(let link of enlaces){
    console.log(link.href)
}
//Hacer lo mismo pero para todos los enlaces de las imagenes
out = document.images;
const imagenes = document.images;
for(let imagen of imagenes){
    console.log(imagen.src)
}

//Convertir HTMLCollection a Array
const imgArray = Array.from(document.images)
imgArray.forEach((img) => (img.src = "https://cataas.com/cat/gif")) // Cambia todas las imagenes por un gato
console.log(out);