/*Realizar un programa que permita generar 100 números e imprimir solo los
números pares*/

for (let i= 0; i <= 100; i++) {
    if (i % 2 === 0) {;
        document.write(`numero par ${i}<br>`)
    }
};

// Realizar un programa que permita sumar los 150 primeros números.
let sum = 0

for (let i = 1 ; i<=150; i++){
    sum += i;
}
document.write(`La suma de los primeros 150 números es ${sum}`);