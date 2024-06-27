// en typescript -> tenemos algo que se llama observador/observable -> nos permite que se esté ejecutando el código todo el tiempo ----> "tsc --watch archivo.ts"

// "node --watch archivo.js"

console.log('hola soy typescript');

// INFERENCIA DE TIPOS 
//Si importa el tipo de variable
//asume que esa variable SOLO recibe el tipo de datos que usted guardó por primera vez

//declaración implícita
let miVariable = "abc";  
miVariable = 'luisa';

let miNumero = 20;
miNumero = 30;

//Declaración explícita
let miNumero2 : number;
//Asignas un valor respetando el tipo declarado
miNumero2 = 30;
//console.log(miNumero2);


//TIPOS DE DATOS 
//DATOS PRIMITIVOS -> Básicos (string, numero, booleanos, undefined, null)

//numérico (-1, 10, 5.6 ...)
let numero : number; 
//String -> texto
let texto : string;
//Booleanos
let buleano : boolean;
//Indefinidos
let indefinido : undefined;
//Nulos
let nulo : null;

numero = 2;
texto = "hola";
buleano = false;
indefinido = undefined;
nulo = null;


//TIPOS DE DATOS ESPECIALES
//Arrays , objetos, unkwon -> desconocido y any
//implicitamente es un arreglo de números
let arreglo = [1, 2, 5];

//declaración explícita de un arreglo
//forma 1
let arreglo2 : Array<number>
let arreglo3 : Array<string>
let arreglo4 : Array<boolean>

arreglo = [10, 70, 35];
arreglo2 = [100, 700, 350];
arreglo3 = ['luisa', 'cristian', 'laura'];
arreglo4 = [true, false];

//forma 2 de declarar tipos de datos en los arreglos
let miArreglo : string[];
miArreglo = ['luisa', 'angelo'];

//objetos - known - any - funciones
