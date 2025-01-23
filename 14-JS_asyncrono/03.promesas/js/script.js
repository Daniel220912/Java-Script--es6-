function getData(endpoint){
    return new Promise((resolve, reject ) => {
        const xhr = new XMLHttpRequest();
        xhr.open("GET", endpoint);
        xhr.onreadystatechange = function(){
            if(this.readyState === XMLHttpRequest.DONE){
                if (this.status === 200) {
                 resolve(JSON.parse(this.responseText));   
                }else{
                    reject("Algo ha ido mal")
                }
            }
        }
    setTimeout(() => {
        xhr.send();
     }, Math.floor(Math.random() * 3000) + 1000);
    });
}

getData("./pelis.json")
.then((pelis) =>{
    console.log( pelis);
    return getData("./directores.json");
})
.then((directores) => {
    console.log(directores);
    return getData("./actores.json");
}).then(()=>{
    console.log(actores);
})
.catch((error) => {
    console.log(error);
});

//Investigar promise.all