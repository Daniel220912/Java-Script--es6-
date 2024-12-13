//foreach ejecuta una funcion callback para cada elemento del array
const nums = [2, 4, 65, 4, 5, 6, 9, 3, 5];
function suma3(num) {
    console.log(num + 3);
}
nums.forEach(suma3); //SUMA 3 A TODOS LOS NUMEROS

nums.forEach(function (item, index) {
    console.log(`Indice ${index} vale: ${item}`);
});


//Arrow functions en ES6
const resta3 = function (num) { //USAMOS FUNCTION
    return num - 3;
};


const resta4 = (num) => {return num - 4;}; //RETURN EN FORMA DE FLECHA

//Si solo hay una expresion el return va implicito
//se pueden omitir las llaves
const resta5 = (num) => {num - 5; //SI SOLO ES UNA EXPRESION QUITAMOS LOS PARENRTESIS
};

nums.forEach(element => {
    console.log(element * 2); 
});



//filter
const nums2 = [2, 4, 65, 4, 5, 6, 9, 3, 5];
//crear un nuevo array solo con los pares
 const numsPares = nums2.filter(function (num) { //SI ES FALSO NO LO SACA
     return num % 2 === 0;
 });
//Lo mismo pero con arrow function
const numPares2 = nums2.filter((n) => n % 2 === 0);

const empresas = [
    { name: "Financiera Alpha", category: "Finanzas", start: 1981, end: 2004 },
    { name: "Tienda Beta", category: "Minorista", start: 1992, end: 2008 },
    { name: "Motores Gamma", category: "Automoción", start: 1999, end: 2007 },
    { name: "Retail Delta", category: "Minorista", start: 1989, end: 2010 },
    { name: "Tecno Epsilon", category: "Tecnología", start: 2009, end: 2014 },
    { name: "Inversiones Zeta", category: "Finanzas", start: 1987, end: 2010 },
    { name: "Autos Omega", category: "Automoción", start: 1986, end: 1996 },
    { name: "Innovación Sigma", category: "Tecnología", start: 2011, end: 2016 },
    { name: "Market Kappa", category: "Minorista", start: 1981, end: 1989 },
  ];

//   Obtener solo las empresas Minoristas (filter)
//   const minoristas = empresas.filter((empresa) => { //EMPRESA TE LO INVENTAS TU, LE DAS UNA REFERENCIA PARA QUE BUSQUE
//     return empresa.category ==="Minorista"; 
//   });

  //Obtener las empresas que empezaron en 1980 o después y cerraron en 2005 o antes.
  const empresas1 = empresas.filter((empresa) => { //EMPRESA TE LO INVENTAS TU, LE DAS UNA REFERENCIA PARA QUE BUSQUE
    return empresa.start >= 1980 && empresa.end <= 2005;
  });
  console.log(empresas1);
  

  
// https://www.youtube.com/watch?v=qqR1enOceVg

//Obtener las empresas que tienen 10 años o más
const empresasViejunas = empresas.filter((empresa) => {
  return empresa.end - empresa.start >= 10;
})
console.log(empresasViejunas);


// map: devuelve un array nuevo
// con lo que devuelva el callback
const empresasYearsOfActivity = empresas.map((empresa) => {
  const newEmpresa = {
    name: empresa.name,
    years: empresa.end - empresa.start,
  };
  return newEmpresa;
})
console.log(empresasYearsOfActivity);



//Se pide un array nuevo solo con el nombre de las empresas pero en Mayusculas
    // usando map

    const empresasMayus = empresas.map((empresa) => {
    return { name: empresa.name.toUpperCase() };
    });
    console.log(empresasMayus);


    //Imprimir con document.write lo siguiente para cada semana:
    //"<p> Finanzas <strong> 'Financiera Alpha' </strong> te desea <em> Feliz Navidad </em>.</p>
   // <sm>Contigo desde 1981./sm>"   (con foreach)
    empresas.forEach((empresa) => {
      const text = `<p> ${empresa.category} <strong>'${empresa.name}' Finanzas 'Financiera Alpha' </strong> te desea <em> Feliz Navidad </em>.</p>
   // <sm>Contigo desde ${empresa.start}.</sm>`;
   document.write(text)
    });

    
//ESTO ES POR DEBAJO DEL FILTER

// empresas.miFilter = function (callback) {
//   const array = [];
//   for (let i = 0; i < empresas.length; i++) {
//     if(callback(empresas[i])){
//       array.push(empresas[i])
//     }
//   }
//   return array;
// };

// empresas.miFilter((e) => {
//   return e.category === "Minorista";
// });