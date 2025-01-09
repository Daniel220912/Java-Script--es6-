//Crear elementos del DOM
const miDiv = document.createElement('div');
// miDiv.style.backgroundColor = "blue";
miDiv.className = "text-red";
miDiv.id = "mi-id";
// miDiv.title = "Texto random";
//Mejor con metodo
miDiv.setAttribute('title', 'Hola mundo'); 
miDiv.classList.add('oculto'); //Añadir y quitar clases // usar esta
// console.dir(miDiv);
// miDiv.innerHTML = "Soy un div nuevo!!";
const texto = document.createTextNode("Soy un Div nuevo!!");//CREAR UN NODO DE TEXTO
console.log(texto);
miDiv.appendChild(texto);//AÑADIR EL NODO DE TEXTO COMO HIJO DEL ELEMENTO miDiv
console.log(miDiv);
