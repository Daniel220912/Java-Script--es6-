// const nombre = "Monitor de 20 pulgadas"
// const precio = 200;
// const disponible = true;

// Objetos como literal
const producto = { //objeto:{} array:[]
      nombre: "Pantalla OLED",
       precio: 300,
       disponible: true,
    };    

    //accedemos a las propiedas por un .
    console.log(producto.nombre);
    console.log(producto.precio);
    console.log(producto.disponible);

    producto.nombre = "Teclado USB";
    console.log(producto);
    producto.imagen = "imagen.jpg";
    console.log(producto);

    //Crear otro producto con otros datos
    //e imprimirlo en la consola

    const producto2 ={
      nombre: "Ordenador",
      precio: 200,
      caracteristicas: "entrada USB",
      ram: "500 Gb"
    };

    console.log(producto2);

    //Otra forma de acceder a las propiedades
    console.log(producto2["ram"]);
    //quitar una propiedad
    delete producto2.caracteristicas
    

    //destructuración de Objetos
//     const nombre = producto2.nombre;
//     const disponible = producto2.disponible;
//     const precio = producto2.disponible;

    const { nombre, precio, disponible } = producto;
    console.log(nombre);
    
    
    

    
    
    
    