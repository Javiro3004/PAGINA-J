/*Realizar el algoritmo que realice las 4 operaciones básicas para dos números
de entrada.*/
alert (`<br> bienvenido a este algoritmo por favor ingrese dos numeros  para realizar las 4 operaciones básicas <br>`);


let num1 = parseInt(prompt("Ingrese un número"));
let num2 = parseInt(prompt("Ingrese otro número"));

if (isNaN(num1) || isNaN(num2)) {
    alert("Por favor, ingrese solo valores numericos.");
} else {
    document.write(`<br> La suma de sus números es ${num1 + num2} <br>`);
    document.write(`<br> La resta de sus números es ${num1 - num2} <br>`);
    document.write(`<br> La multiplicación de sus números es ${num1 * num2} <br>`);
    document.write(`<br> La división de sus números es ${num1 / num2} <br>`);
}