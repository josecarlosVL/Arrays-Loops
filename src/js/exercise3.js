/*
Exercise #3 (sugerencia reduce())
Write a program to compute the sum and product (multiplication) of an array of numbers. Print out the sum and the product.
Example: Given an array [1, 2, 3, 4] The sum is 10. The product is 24.
The reduce() method in JavaScript is an iterative method of arrays that executes a "reducer" callback function on each element of the array, in ascending-index order, and accumulates them into a single value. This single value is the final result of the reduce() operation. 
*/
function exercise3(){
console.clear();
console.log("Exercise 3");
let array = [1, 2, 3, 4];
const sumarMultiplicar  = (array) => [array.reduce(sumar), array.reduce(multiplicar)];
const sumar = (suma,elemento) => suma + elemento;
const multiplicar = (producto,elemento) => producto * elemento;
console.log(`The sum is ${sumarMultiplicar(array)[0]}. The product is ${sumarMultiplicar(array)[1]}`);
}
export {exercise3};