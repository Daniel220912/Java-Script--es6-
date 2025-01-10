//Rapida de escribir pero poco eficiente
/*
      <li>
        Leche
        <button class="remove-item btn-link text-red">
          <i class="fa-solid fa-xmark"></i>
        </button>
      </li>
*/

//Traer referencia del input
const itemInput = document.querySelector("#item-input");
//Traer una referencia al boton
const btnAddItem = document.querySelector("#mi-boton");
//Traer una referencia a la lista
const lista = document.querySelector("#item-list");

//Event Listeners
btnAddItem.addEventListener("click", () => {
  console.log("Añadir item!!!", itemInput.value);
  createListItem1(itemInput.value);

});

//funciones
//Version senzilla pero no demasiado limpia
function createListItem1(textItem) {
  let listaTextoHtml = lista.innerHTML;
  listaTextoHtml += `<li>${textItem}
                           <button class="remove-item btn-link text-red">
                              <i class="fa-solid fa-xmark"></i>
                          </button>
                      </li>`;
  lista.innerHTML = listaTextoHtml;
}



//Limpia y más rendimiento
function createListItem2(textItem) {
  const li = document.createElement("li"); //Crear un elemento li
  const text = document.createTextNode(textItem); //Crear un nodo de texto
  li.appendChild(text); //Agregar el nodo de texto al elemento li <li> text </li>
  const button = document.createElement("button"); //Crear un elemento button //<button> </button>
  button.className = "remove-item btn-link text-red"; //Agregar clases al boton //<button class= "remove-item btn-link text-red"> </button>

  const icon = document.createElement("i"); //Crear un elemento i //<i> </i>

  icon.className = "fa-solid fa-xmark"; //Agregar clases al icono //<i class="fa-solid fa-xmark"> </i>

  button.appendChild(icon); //Agregar el icono al boton <button class= "remove-item btn-link text-red">
  //  <i class="fa-solid fa-xmark"> </i>
  //  </button>

  li.appendChild(button); //Agregar el boton al li
  //  <li> text 
  // <button class= "remove-item btn-link text-red">
  //  <i class="fa-solid fa-xmark"> </i>
  //  </button>

  lista.appendChild(li); //Agregar el li a la lista
  
}