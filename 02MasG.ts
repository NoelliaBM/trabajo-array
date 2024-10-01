/*Encontrar el elemento más grande del arreglo

Dado el siguiente arreglo
[4,7,9,3,1,45,67,23,29,78,11,16]
- Crear un programa que encuentre cuál es el número
más grande del arreglo e imprimirlo por consola
- Almacenar el número más grande en una variable
global y pasarlo a una función para determinar si el
número es par o impar*/
//crear una variable con los arreglos de numero
//crear un programa que encuentre el numero mas grande
// ponerlo en una variable global 
// hacer una funcion de par o impar 

import*as rs from "readline-sync";
const numeros:number[]=[4,7,9,3,1,45,67,23,29,78,11,16];
let mayor:number=0;
const long= numeros.length;
for(let i =0;i< long;i++){
if (numeros[i]>mayor){
  mayor=numeros[i];
};
};
console.log(`El mayor puntaje es ${mayor}`);
console.log(ParoImpar())

function ParoImpar():void{
    if(mayor % 2 === 0){console.log("es par")}
    else{console.log("es impar")}
}
