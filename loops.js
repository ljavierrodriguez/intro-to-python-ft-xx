/* Loops o Ciclos */
/* 

for(contador; condicion; incremento){
    sentencias
}

for (indice in coleccion){
    sentencias
}

for (valor of coleccion){
    sentencias
}

while(condition){
    sentencias
}

do {
    sentencias
} while (condition)

*/

for(let i = 1; i <= 10; i++){
    console.log(i);
}

let i = 1;
while(i <=10){
    console.log(i);
    i++;
}

let numbers = [1, 2, 3]

for(let i = 0; i < numbers.length; i++){
    console.log(numbers[i]);
}