// Realizar el algoritmo que convierta litros en centilitros, decilitros, galones y onzas

let numero = prompt ("Ingrese un valor en  litros")

document.write (`<br> sus litros en litros son ${ numero}`)
document.write (`<br> sus litros en deilitros son ${ numero*10}`)
document.write (`<br> sus litros en centilitros son ${ numero*100}`)
document.write (`<br> sus litros en galones son ${ numero / 3.78541}`)
document.write (`<br> sus litros en onzas son ${ numero*35.2}`)