// Data Types
/* 

String
Number
Boolean
Undefined

Objectos 
    Null
    Array
    Literal Object

function

*/

// let, const, var

let nombre = "Luis";
let parrafo = `Lorem, ipsum dolor sit amet consectetur 
adipisicing elit. Deserunt pariatur perspiciatis numquam 
sapiente harum libero culpa totam odio magni in mollitia 
eos nisi quas minima velit deleniti quod, maiores vero?`

let edad = 40; // number
let grade = 4.5; // number

let active = false; //  boolean
let single = true; // boolean

let direccion; // undefined
let address = null; // object

let alumnos = ["Hugo", "Paco", "Luis"];

let person = {
    name: 'John',
    lastname: 'Doe'
}

function sumar(a, b){ // function
    return a + b;
}

const sumar = (a, b) => a + b;

const sumar2 = function(a, b){
    return a + b;
}