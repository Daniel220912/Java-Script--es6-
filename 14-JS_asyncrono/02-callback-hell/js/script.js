function getData(endpoint, callback, error){
    const xhr = new XMLHttpRequest();
    xhr.open("GET", endpoint);
    xhr.onreadystatechange = function(){
        if(this.readyState === XMLHttpRequest.DONE && this.status === 200){
            callback(JSON.parse(this.responseText));
        }else if (this.status !== 200){
            error();
        }
    };
    xhr.send();
}
console.log("Antes del getData");
getData(
    "./pelis.json", 
    (data) => {
        console.log("Las pelis son: ", data);
        getData(
        "./directores.json", 
        (data) => {
            console.log("Los directores son: ", data);
            //TODO buscar el director de la peli

        getData(
        "./actores.json", 
        (data) => {
            console.log("Los actores son: ", data);
            
        } ,
        (error) => {
            console.log("Algo ha ido mal!!");
        }
        );
    } ,
    (error) => {
        console.log("Algo ha ido mal!!");
    }
    

    
  );
    } ,
    (error) => {
        console.log("Algo ha ido mal!!");
    }
);


// getData(
//     "./directores.json", 
//     (data) => {
//         console.log("Los directores son: ", data);
        
//     } ,
//     (error) => {
//         console.log("Algo ha ido mal!!");
//     }
// );

// getData(
//     "./actores.json", 
//     (data) => {
//         console.log("Los actores son: ", data);
        
//     } ,
//     (error) => {
//         console.log("Algo ha ido mal!!");
//     }
// );

// getData(
//     "./pelis.json", 
//     (data) => {
//         console.log("Las pelis son: ", data);
        
//     } ,
//     (error) => {
//         console.log("Algo ha ido mal!!");
//     }
// );