
const itemForm = document.querySelector("#item-form");
const itemInput = document.querySelector("#item-input");
const lista = document.querySelector("#item-list"); 

//Event Listeners
itemForm.addEventListener("submit", (evt) => {
    evt.preventDefault(); //Evitar que se recargue la página
  console.log("Añadir item!!!", itemInput.value);
 const newItem = createListItem2(itemInput.value);
 lista.appendChild(newItem);
});

//Limpia y más rendimiento
function createListItem(textItem) {
  const li = document.createElement("li"); //Crear un elemento li
  const text = document.createTextNode(textItem); //Crear un nodo de texto
  li.appendChild(text); //Agregar el nodo de texto al elemento li <li> text </li>

  const button = document.createButton("remove-item btn-link text-red"); //Crear un elemento button //<button> </button>
  li.appendChild(button); //Agregar el boton al li
  return li;
}

function createButton(clases) {
    const button = document.createElement("button"); //Crear un elemento button //<button> </button>
    button.className = clases; //Agregar clases al boton //<button class= "remove-item btn-link text-red"> </button>
    
    const icon = createIcon("fa-solid fa-xmark");
    button.appendChild(icon); 
    return button;
}

function createIcon(clases) {
  const icon = document.createElement("i"); 
  icon.className = clases;
  return icon;

}