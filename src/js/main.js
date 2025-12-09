import { exercise1 } from "./exercise1.js";
import { exercise2 } from "./exercise2.js";
import { exercise3 } from "./exercise3.js";
import { exercise4 } from "./exercise4.js";
import { exercise5 } from "./exercise5.js";
import { exercise6 } from "./exercise6.js";
/*
let object = document.getElementById("1");
console.log("Hola")
object.onclick = function(){
    exercise1();
}*/
globalThis.executeScripts = executeScripts; //Necesario para que la función pueda llamarse si estamos usando módulos
function executeScripts(value){
    switch(value){
        case 1:
            exercise1();
        break;
        case 2:
            exercise2();
        break;
        case 3:
            exercise3();
        break;
        case 4:
            exercise4();
        break;
        case 5:
            exercise5();
        break;
        case 6:
            exercise6();
        break;
        default:
            console.log("Ha ocurrido un error");
        break;
    }
}