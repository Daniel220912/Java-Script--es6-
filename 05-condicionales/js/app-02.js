
const operador = prompt("Escribe el operador:  +, -, *, /");
const a = parseFloat(prompt("Primer operando: "));
const b = parseFloat(prompt("Segundo operando: "));
let resultado;
switch (operador) {
    case "+":
        resultado = a + b;
        break; //HACE QUE LOS CASOS QUE VENGAN DESPUES NO SE EJECUTEN

    case "-":
            resultado = a - b;
            break;

            case "*":
        resultado = a * b;
        break;

    case "/":
        resultado = a / b;
        break;
    default:
        resultado = "Operador no valido"
        break;
}


alert( "El resultado es:  " + resultado);






