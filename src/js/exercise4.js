/*
Exercise #4 (sugerencia filter() e includes())
let student1Courses = ['Math', 'English', 'Programming'];
let student2Courses = ['Geography', 'Spanish', 'Programming'];
Create a program that loops over the 2 arrays; if there are any common courses print them out to the console.}
The filter() method creates a new array filled with elements that pass a test provided by a function.
El método includes() determina si una matriz incluye un determinado elemento, devuelve true o false según corresponda.
*/
function exercise4(){
console.clear();
console.log("Exercise 4");
let student1Courses = ['Math', 'English', 'Programming'];
let student2Courses = ['Geography', 'Spanish', 'Programming'];

const compare = vector => vector.filter(includes);
const includes = element => student2Courses.includes(element);
console.log(compare(student1Courses));}
export {exercise4};