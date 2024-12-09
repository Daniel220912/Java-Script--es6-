//Los objetos pueden tener cualquier tipo de 
//dato coomo valor de propiedad
const producto = {
    nombre: "Mesa comedor",
    precio: 200,
    stock: true,
    color:["negro", "blanco", "gris"], //array
    info:{
        peso: "16kg",
        medidas:{
            h: 2,
            x:2,
            y:2,
        },
    },
};


+-
    function imprimirInfo(producto) {
        console.log(`La ${producto.nombre}
            pesa ${producto.info.peso}`);
        
    console.log("Tienes los siguientes colores: ");
    for (let i = 0; i < producto.color.length; i++) {
        const color = producto.color[i];
        console.log(color);
    }
}
imprimirInfo(producto)
// console.log(`Tienes los siguientes colores: ${producto.color}`);


