//Traer las referencias de los elementos del DOM
const itemForm = document.querySelector("#item-form");
const itemInput = document.querySelector("#item-input");
const itemList = document.querySelector("#item-list");

/**
 * 
 * @param {SubmitEvent} evt 
 */
function addItem(evt) {
    evt.preventDefault(); //Previene el efecto submit del formulario

    //Validar que el input no esté vacío
    const newItem = itemInput.value.trim();
    //Si el campoestá vacío avisamos al usuario y salimos de la función
    if (newItem === "") {
        alert("Debes escribir un producto");
        return;
    }

    //Inserta el elemento en el DOM
    const li = createNewItem (newItem);
    itemList.appendChild(li);

    //Limpar el campo de texto	
    itemInput.value = "";

    /********* Funciones para la creacion de los elementos de la lista */
    function createNewItem(textItem) {
        const li = document.createElement("li"); //Crear un elemento li
        const text = document.createTextNode(textItem); //Crear un nodo de texto
        li.appendChild(text); //Agregar el nodo de texto al elemento li <li> text </li>
      
        const button = createButton("remove-item btn-link text-red"); //Crear un elemento button //<button> </button>
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
}



//Event Listeners
itemForm.addEventListener("submit", addItem);