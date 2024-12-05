//metodos de arrays.
let x;
const arr = [28,34,56,73,890,55];
//Añadir un elemento al final.
arr.push(100, 20 ,44); //Push es para añadir al final.
arr.pop(); //Quita el ultimo del final en este caso 44.
x = arr.unshift(2000); //Añade al principio.
arr.shift(); //Quita el primer elemento.

// arr.reverse(); 
x = arr.includes(103); //Para saber si ese numero esta, si está es verdadero sino es falso.
x = arr.indexOf(34); //Devuelve el indice del elemento, en este caso está en el 2 , si no lo encuentra devuelve -1
x = arr.toString(); //Cambia los valores a string.
x = arr.join("-"); // se utiliza para combinar todos los elementos de un array en un solo string, separando cada elemento con un delimitador especificado. Si no se especifica ningún delimitador, el método utiliza una coma (,) de manera predeterminada.
x = arr.slice(1, 4); //Devuelve una copia de una seccion del array, del 2 al 3.No modifica el original.     Hasta el 4 sin incluir el 4.
x = arr.splice(1, 4); //Quita y puede remplazar 
         // const array = [10, 20, 30, 40, 50];
        // const eliminados = array.splice(2, 2); // Comienza en el índice 2 y elimina 2 elementos
       // console.log(array);      // [10, 20, 50]  -> El array original se ha modificado
      // console.log(eliminados); // [30, 40] -> Los elementos eliminados
// x = arr;
//Podemos concatenar metodos dependiendo del valor de vuelta.
x = arr.slite(1, 4).reverse().toString().charAt(0);
//foreach, map, reduce, filter...
console.log(x);



