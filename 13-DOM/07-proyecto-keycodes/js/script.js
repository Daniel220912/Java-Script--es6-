function getKeyCodeInnerHTML(e) {
        console.log(e);
        const insertDiv = document.querySelector("#insert");
        insertDiv.innerHTML = `<div class="key">${e.key === " " ? "Espacio" : e.key}
                                        <small>e.key</small>
                                </div>
                                <div class="key">${e.keyCode}
                                        <small>e.keyCode</small>
                                </div>
                                <div class="key">${e.code}
                                        <small>e.code</small>
                                </div>`;
      }

      //DOS FORMAS DE HACER LO MISMO


      function getKeyCodeCreateNodes(e) {
        //TODO obtener la mima funcionalidad que la funcion anterior
        //pero usando createElement, createTextNode y appendChild
        //Sin innerHtml
        const insertDiv = document.querySelector("#insert"); 
        insertDiv.textContent = ""; //limpia el contenido del div

        const keyCodesArr = [
                { name: "e.key", evento: e.key }, //crea un objeto con el nombre y el evento
                { name: "e.keyCode", evento: e.keyCode }, //crea un objeto con el nombre y el evento
                { name: "e.code", evento: e.code }, //crea un objeto con el nombre y el evento
        ];

        keyCodesArr.forEach((keyInfo) => { //recorre el array keyCodesArr
                const div = createDiv(keyInfo.name, keyInfo.evento); //crea un div con el nombre y el evento
                insertDiv.appendChild(div); //agrega el div al div insertDiv
        });

        // const keyCodes = {
        //         "e.key": e.key,
        //         "e.keyCode": e.keyCode,
        //         "e.code": e.code
        // }

        // for (let key in keyCodes){
        //         const div = createDiv(key, keyCodes[key]);
        //         insertDiv.appendChild(div);
        // }
         
      }
      // window.addEventListener("keyup", getKeyCodeInnerHTML);
      window.addEventListener("keyup", getKeyCodeCreateNodes); //llama a la funcion getKeyCodeCreateNodes
      
      function createDiv(_keyText, _valueText) { //crea un div con un texto y un small
        const div = document.createElement("div"); //crea un div
        div.classList.add("key"); //le agrega la clase key
      
        const small = document.createElement("small"); //crea un small
        const keyText = document.createTextNode(_keyText); //crea un texto con el parametro _keyText
        small.appendChild(keyText); //agrega el texto al small
      
        const valueText = document.createTextNode(_valueText); //crea un texto con el parametro _valueText
        div.appendChild(valueText); //agrega el texto al div
        div.appendChild(small); //agrega el small al div
        return div; //retorna el div
      }

      