let num1 = parseInt(prompt("Ingrese el primer digito: "))
let operator = prompt("Ingrese el operador: ")
let num2 = parseInt(prompt("Ingrese el segundo digito: "))

function calculadora(num1, operator, num2){
    switch(operator){
        case "+":
            return num1 + num2;
            break;
        case "-":
            return num1 - num2;
            break;
        case "*":
            return num1 * num2;
            break;
        case "/":
            return num1 / num2;
            break;
        default: 
            return 0;
            break;
    }
}

if (operator === "/" && num2 === 0){
    alert("NO SE PUEDE DIVIDIR POR CERO")
} else {
    alert(calculadora(num1, operator, num2))
}
