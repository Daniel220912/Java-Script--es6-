//Selectores de ID
 const tituloPrincipal = document.getElementById("titulo-principal") //Seleccionas el h1
 console.log(tituloPrincipal.innerText) //Imprimes el texto del h1; 

 //Con query selector
 const tituloPrincipalQuery = document.querySelector("#titulo-principal") //Seleccionas el h1, tiene que ir el # para que sepa que es un id
 console.log(tituloPrincipalQuery.innerText) //Imprimes el texto del h1; 

 //Ejemplo de leer input de texto
 const itemInput = document.getElementById("item-input") //Seleccionas el input
 //Creamos un evento
 itemInput.addEventListener("keyup", () => { //Cuando se suelte una tecla
 console.log(itemInput.value) //Imprimimos el valor del input
 tituloPrincipal.innerText = itemInput.value //Cambiamos el texto del h1 por el valor del input cada vez que se suelte una tecla
 })


