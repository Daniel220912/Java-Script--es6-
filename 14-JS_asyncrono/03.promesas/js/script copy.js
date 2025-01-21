//Explicacion de las promesas con animaciones
//https://medium.com/@lydiahallie/javascript-visualized-promises-async-await-a3f1aad8a943
const promesa = new Promise ((resolve, reject)=>{
    setTimeout(() => {
        console.log("Tarea asincrona completada");
        resolve();
    }, 2000);
})
console.log("Antes de la promesa");
promesa.then( ()=>{
    console.log("Promesa terminada correctamente");  
});
console.log("Despues de la promesa");


const getUser = new Promise ((resolve, reject) =>{
    setTimeout(() => {
        let error = true;
        if (error) {
            reject("Algo ha ido mal"); //Cuando no va bien
        } else{
            resolve({name:"Pepe", age:30}); //resolve es el valor que se pasa a la promesa
        }
    }, 4000);
})

getUser
.then((user) => { //.then es el valor que se pasa a la promesa //then cuando va bien
    console.log(user);
})
.catch((error) => { //catch cuando va mal
    console.log(error);
}).finally(() => { 
    console.log("La promesa se ha resuelto o se ha rechazado") //Cuando va mal
});
    