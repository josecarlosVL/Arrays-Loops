/*
Exercise #2 (sugerencia map())
Write a function that:
Takes in an array of numbers.
Doubles the value of each number in the array.
Prints out the new updated array.
Example: Given an array [1, 2, 4, 5]. The output should be [2, 4, 8, 10]

*/

function exercise2(){
console.clear();
console.log("Exercise 2");
const vectorX2 = vector => vector.map(duplicar); // El método map aplica la función  duplicar a cada elemento del arreglo por separado.
const duplicar = num => num*2; // Cada elemento del arreglo pasa por esta funcion
let numbers = [1, 2, 4, 5];
console.log(vectorX2(numbers));}
export{exercise2};