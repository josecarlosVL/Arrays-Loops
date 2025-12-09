/*
Write a function that performs the bubble algorithm.
Input [3, 6, 12, 5, 100, 1]
Output [1, 3, 5, 6, 12, 100]

Cómo funciona (Pasos Clave):
Inicio: Recorre la lista desde el principio.
Comparación: Compara el primer elemento con el segundo.
Intercambio: Si están en el orden incorrecto (por ejemplo, si el primero es mayor que el segundo en orden ascendente), los intercambia de posición.
Siguiente Par: Avanza al siguiente par (el segundo y el tercero) y repite el proceso.
Fin de Pasada: Continúa hasta el final de la lista, haciendo que el elemento más grande "suba" a su posición final.
Repetición: Repite todo el proceso (pasadas) hasta que en una pasada completa no se necesite hacer ningún intercambio, lo que indica que la lista ya está ordenada. 
*/
function exercise6(){
console.clear();
console.log("Exercise 6");
let input = [3, 6, 12, 5, 100, 1];
let aux;
for (let i=1;i<input.length;i++){
    for(let j=0;j<input.length-i;j++){
        if (input[j]>input[j+1]){
            aux = input[j];
            input[j] = input[j+1];
            input[j+1] = aux;
        }
    }
}
console.log(input);}
export{exercise6};