//Reduce
const numbers = [1, 2, 3, 4, -5, -6, 7, -8, 9, 10];
const total = () => {
    let acumulador = 0;
    for (let i = 0; i < numbers.length; i++) {
        acumulador += numbers[i];
    }   
    return acumulador;
};
//ARRIBA Y ABAJO SON IGUALES
console.log(total());
const sumatorio = numbers.reduce((acumulador, valor) => {
    return acumulador + valor; 
}, 0);
console.log(sumatorio);


const cart =[
    { id:1, name: "platanos", price: 1.80},
    { id:2, name: "manzanas", price: 0.98},
    { id:3, name: "kiwis", price: 2},
];



// //Calcular el total del carrito
let totalCarrito = 0;
// // for (let i = 0; i < cart.length; i++) {
// //   totalCarrito += cart[i].price;
// // }   

//LAS TRES SON IGUALES

// cart.forEach((item) =>{
//     totalCarrito += item.price;
// });

//LAS TRES SON IGUALES
totalCarrito = cart.reduce((acc, producto) =>  acc + producto.price,0);
console.log(totalCarrito);


//Some y Every
const arr1 =[1, 2, 3, 4, 8];
const arr2 =[1, 2, 3, 4, 5];

let testMayor5 = arr1.some((item) => item > 5); //MIRA CADA UNO SI ES MAYOR QUE 5, SI LO HAY DEVUELVE TRUE, SINO FALSE
console.log(testMayor5);

 testMayor5 = arr2.some((item) => item > 5);
 console.log(testMayor5);


//  EVERY, SI UNO ES FALSO DEVUELVE TODO FALSO


//flat
const arr3 = [[1, 2, 3, 4],
 [44, 55, 6], 
 [6, 7, 8, 9],
];
let tot= 0;
tot = arr3.flat().reduce((acc, item) => acc + item); //SUMA LOS TRES ARRAYS
console.log(tot);

//sort
const cart2 =[
    { id:1, name: "platanos", price: 1.80},
    { id:2, name: "manzanas", price: 0.98},
    { id:3, name: "kiwis", price: 2},
];
//crear un array nuevo ordenado usando sort de menor a mayor precio
const testSort = [34,5,67,7985,5];
console.log(testSort);
const newTestSort = testSort.toSorted((a, b) => a - b);  //ORDENA LOS NUEMEROS DE MENOR A MAYOR
console.log(testSort);
console.log(newTestSort);

const cart2Sorted = cart2.toSorted((a, b) => a.price - b.price);
console.log(cart2Sorted);

//find 
const kiwis = cart2.find((item) => item.name === "kiwis"); // SI EXISTE TE ENCUENTRA EL OBJETO Y TE LO DA ENTERO
console.log(kiwis);
