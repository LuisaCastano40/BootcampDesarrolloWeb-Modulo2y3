// en typescript -> tenemos algo que se llama observador/observable -> nos permite que se esté ejecutando el código todo el tiempo ----> "tsc --watch archivo.ts"
// "node --watch archivo.js"
console.log('hola soy typescript');
// INFERENCIA DE TIPOS 
//Si importa el tipo de variable
//asume que esa variable SOLO recibe el tipo de datos que usted guardó por primera vez
//declaración implícita
var miVariable = "abc";
miVariable = 'luisa';
var miNumero = 20;
miNumero = 30;
//Declaración explícita
var miNumero2;
//Asignas un valor respetando el tipo declarado
miNumero2 = 30;
//console.log(miNumero2);
//TIPOS DE DATOS 
//DATOS PRIMITIVOS -> Básicos (string, numero, booleanos, undefined, null)
//numérico (-1, 10, 5.6 ...)
var numero;
//String -> texto
var texto;
//Booleanos
var buleano;
//Indefinidos
var indefinido;
//Nulos
var nulo;
numero = 20;
texto = "hola";
buleano = false;
indefinido = undefined;
nulo = null;
//TIPOS DE DATOS ESPECIALES
//Arrays , objetos, unkwon -> desconocido y any -> cualquiera
//implicitamente es un arreglo de números
var arreglo = [1, 2, 5];
//declaración explícita de un arreglo
//forma 1
var arreglo2;
var arreglo3;
var arreglo4;
arreglo = [10, 70, 35];
arreglo2 = [100, 700, 350];
arreglo3 = ['luisa', 'cristian', 'laura'];
arreglo4 = [true, false];
//forma 2 de declarar tipos de datos en los arreglos
var miArreglo;
miArreglo = ['luisa', 'angelo'];
//objetos - unknown - any - funciones
//nuestras variables reciben datos de cualquier tipo
//no es tan usado 
var desconocido; //usted recibe cualquier tipo de dato, porque no sabe qué va a llegar
var cualquiera; //no me importa lo que llegue, guárdemelo 
desconocido = 'luisa';
desconocido = 3;
desconocido = [true, false];
cualquiera = false;
cualquiera = undefined;
cualquiera = null;
// OBJETOS 
var miObjeto; // -> [] o {}
//declaración explicita de un objeto literal
// Asignación -> = -> valores y Declaración -> : -> tipo
var miObjetoCarro;
miObjetoCarro = {
    id: 1,
    marca: 'BMW',
    vendido: true
};
//FUNCIONES
//Las funciones pueden devolver valores o puede que no devuelvan nada
// devolver datos de tipo number, string, boolean, object
//las que no devuelven -> :void -> sólo me ejecuto
var retorno;
function miFuncion1() {
    console.log("soy función 1");
}
//ejecute
miFuncion1();
//guárdese en una variable
//retorno = miFuncion1(); -> nos retorna indefinido
//mi variable le puedo dar parámetros -> le asignamos tipos
// fn flecha -> puede que retorne o no retorne
var miFuncion2 = function (num1, num2) {
    return num1 * num2;
};
//retorno = miFuncion2() -> number
//Además yo puedo especificar el tipo de la respuesta que me va a dar
function miFuncion3(num1, num2) {
    return num1 + num2;
}
retorno = miFuncion3(2, 5); //-> number
console.log(retorno);
