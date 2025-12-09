/*
For each of the exercises below, assume you are starting with the following people array.
let people = ["Maria", "Dani", "Luis", "Juan", "Camila"];
Write a command that prints out all of the people in the list.
Write the command to remove "Dani" from the array.
Write the command to remove "Juan" from the array.
Write the command to move "Luis" to the front of the array.
Write the command to add your name to the end of the array.
Using a loop, iterate through this array and after console.log "Maria", exit from the loop.
Write the command that gives the indexOf where "Maria" is located.
At the end of the exercise, there should be 4 people in the array.
*/
function exercise5(){
console.clear();
console.log("Exercise 5");
let people = ["Maria", "Dani", "Luis", "Juan", "Camila"]; 
console.log("Initial List: " + people); //Write a command that prints out all of the people in the list.
people = people.filter(element => element!=="Dani"); // Write the command to remove "Dani" from the array.
console.log("Dani removed. List: " + people);
people = people.filter(element => element!=="Juan"); // Write the command to remove "Juan" from the array.
console.log("Juan removed. List: " + people);
people.splice(people.findIndex(element => element=="Luis"),1); //Delete Luis
people.unshift("Luis"); //Put Luis to the fron of the array
console.log("Luis moved to the front. List: " + people);
people.push("Carlos"); //My Name added to the end of the array
console.log("My name added to the end. List: " + people);
for(let i=0;i<people.length;i++){
    console.log(people[i]);
    if (people[i] == "Maria") break;
}
console.log("Index of Maria: "+people.findIndex(element => element=="Maria")); //Print the index where Maria is located
console.log("Final List: " + people); //Show final list with 4 people
}
export{exercise5};