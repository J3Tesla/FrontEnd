console.log("hola a todos"); console.log("XD")

// comentarios igual y normal XD

/* super comentarios*/


// PRIMITIVOS: Number, String, Boolean ( true y false), undefined,
// null, BigInt, Symbol

// Number:
// 20 15.69 0.99 -36  ----> corresponden a number
console.log(20)
console.log(15.69)
console.log(0.99)
console.log(-36)

//STRING:

console.log("Jahir")
console.log("Miranda")
console.log("Marcos")
console.log("Miranda"+' victor'+" cd")

console.log(typeof"Jahir") // para saber que tipo de dato tenemos
console.log(typeof"Miranda")
console.log(typeof"Marcos")

//BOOLEANOS ---> True o False

console.log(false)
console.log(typeof true)

// UNDEFINED

let nombre // declaracion de una variable
console.log(nombre)
console.log(typeof nombre)

// NULL

let apellido = null
console.log(apellido)

// BigInt-----> nos ayuda a almacenar numeros muy grandes
// Symbol -----> Ayudan a crear valores unicos e irrepetibles


// VARIABLES Y CONSTANTES

// ECMASCRIPT 5 === ES5
// ECMASCRIPT 6 === ES6

// var -> ES5 -.- forma de declarar variable pero no es recomendado, es a nivel_
// de la funcion

// const -> ES6 -.- recomendado para declarar constantes, valor permanente

const edad = 55 // es obligatorio inicializarlo
 // edad = 90---> error ya que no se puede asignar otra variable

 const _edad = 25
 const edadDeMiHijoMayor = 15
 const PI = 3.14
 const empresa = "JS"
 const esMayorDeEdad = false

 console.log(edad)
 console.log(_edad)
 console.log(edadDeMiHijoMayor)
 console.log(PI)
 console.log(empresa)
 console.log(esMayorDeEdad)

 // LET -> ES6 -.- Recomendado para declarar variables

 let edad2 = 35 // no es obligatorio inicializarlo

 edad2 = 49
 console.log(typeof edad2)
 edad2 = "Jahir"
 console.log(typeof edad2)
 edad2 = true
 console.log(typeof edad2)


 // OPERADORES MATEMATICOS

 console.log(1 + 2)
 console.log(3 - 2)
 console.log(2 * 2)
 console.log(1 / 2)
 console.log(1 % 2) // RESIDUO
 console.log(2 ** 3) // DOS ELEVEADO AL CUBO
 console.log(Math.pow(2,3)) // dos elevado al cubo

 // OPERADORES DE ASIGNACION ( = )

 const genero = "femenino"

 console.log(genero)

 // OPERADORES DE COMPARACION

 // OPERADOR DE IGUALDAD, DESIGUALDAD NO ESTRICTA ( ==, !=)
 // devuelve un valor boleano
 // ademas no toma el cuenta el tipo de dato al comparar

 console.log(1 == 1) // true
 console.log(1 == '1') // true

 console.log(1 != 1) // false
 console.log(1 != '1') // false

 // OPERADOR DE IGUALDAD, DESIGUALDAD ESTRICTA ( ===, !== )

 console.log(1 === 1) // true
 console.log(1 === '1') // false

 console.log(1 !== 1) // false
 console.log(1 !== '1') // true

 //OPERADORES DE COMPARACION ( siempre devuelven un boleano)

 console.log( 8 > 5)
 console.log( 5 < 1)
 console.log( 8 >= 5)
 console.log( 5 <= 1)

 // OPERADORES LOGICOS( AND, OR, NOR, NOT, NAND, EXOR)

 console.log(true && false) // AND
 console.log(true || false) // OR
 console.log(!true) // NOT

 // OPERADORES DE CADENA( CONCATENACION)

 const saludo = "HOLA"
 const nombreCompleto = "Jahir" + "Miranda"
 const miEdad = 30

 const imprimirSaludo = saludo + " " + nombreCompleto + " tengo:"+ miEdad

 console.log(nombreCompleto)
 console.log(imprimirSaludo)

/*******************************************************************/
 // EJERCICIOS

 // 1. Retorna true si dos string tienen la misla longitud, si no será false

 const cadena1 = "codigo"
 const cadena2 = "cadaga"

 console.log(cadena1.length) // .length = saber la cantidad de caracteres
 console.log(cadena2.length)

 console.log(cadena1.length === cadena2.length)

 // 2. retornar true si un numero es menor que 40 sino devuelve false

  const n1 = 40
  const n2 = 20

  console.log(n1 > n2)

// 3. (TODO) Retornar True si un numero es menor que 60 sino devolver False

const nn1 = 60
const nn2 = 20

console.log(nn2 < nn1)

// 4. (TODO) Retornar True si un numero es par sino devolver False

const nnn1 = 10
console.log(nnn1 %2 ===0)

// 5. (TODO) Retornar True si un numero es impar sino devolver False

const nnn2 = 9
console.log(nnn2 %2 !== 0)

// 6. (TODO) calcular el area de un triangulo y mostrar su resultado si tenemos los valores base y altura

let base = 30
let altura = 10

console.log((base * altura) / 2)

// 7. (TODO) Almacenar en una constante un número de 3 cifras y mostrar la suma de sus cifras elevada al cubo.

const numero3cifras = 125; // Número de 3 cifras
const Cifras = Math.floor(numero3cifras / 100) + Math.floor((numero3cifras % 100) / 10) + (numero3cifras % 10);
const resultado = Math.pow(Cifras, 3);

console.log(resultado);

// 8. (TODO) Almacenar en una constante un monto de dinero, luego mostrar cuanto le toca a cada socio según la siguiente tabla:
// SOCIO A = 30%, SOCIO B = 20%, SOCIO C = 60%

const dineroTotal = 5200

console.log("SOCIO A = " + (30/100) * dineroTotal)
console.log("SOCIO B = " + (20/100) * dineroTotal)
console.log("SOCIO C = " + (60/100) * dineroTotal)


// CONDICIONALES(IF)

if(true){
    // bloque que se ejecuta si la condicional es verdadera
}
else{
    // bloque que se ejecuta si la condicional es false
}

const numero = 33
const esPar = numero % 2 === 0

if(esPar){
    console.log("Este numero es par", numero)
}
else{
    console.log("Este numero es impar", numero)
}

// CONDICIONALES(IF , ELSE IF, ELSE)

if(false)
{
    // bloque que se ejecuta si la condicional es verdadera
}
else if(false)
{
    // bloque que se ejecuta si la condicional es verdadera
}
else if(true)
{
    // bloque que se ejecuta si la condicional es verdadera
}
else{
    // bloque que se ejecuta si la condicionalsi ninguna cumple
}

let heroe = "tonycros"

if(heroe === "Batman")
{
    console.log("hola Soy Bruce")
} else if(heroe === "Spiderman")
    {
        console.log("hola Soy Peter")
}else if(heroe === "Ironman")
{
    console.log("hola Soy Tony")
} else {
    console.log("no soy nigun heroe")
}

// CONDICIONALES (SWITCH)

heroe = "xd"

switch(heroe){
    case "Batman":
        console.log("hola Soy Bruce")
        break
    case "Spiderman":
        console.log("hola Soy Peter")
        break
    case "Ironman":
        console.log("hola Soy Tony")
        break
    default:
        console.log("no soy nigun heroe")
}

// estructuras repeitivas
// for( sirve para realizar repeticiones)

for(let i = 0; i < 10; i++)
{
    console.log(i)
}

// WHILE

let j = 0
while(j < 10)
{
    console.log("while: ", j)
    j++
}

// DOWHILE
let k = 0

do{
    console.log("do while", k)
    k =k + 1
} while(k<10)

    // EJERCICIOS
// 1. determinar si la edad de una persona es mayoy o menor de edad mostrando "mayor
// de edad" o "menor de edad" segun corresponda

const edadPersona = 35
if(edadPersona >= 18)
{
    console.log("mayor de edad")
}else{
    console.log("menor de edad")
}

// 2. Retornar un saludo en tres diferentes lenguajes:
//    - si es español mostrará 'Hola'
//    - si es inglés mostrará 'Hello'
//    - si es aimara mostrará 'kamisaraki'

let saludo2 = "ingles"

switch(saludo2){
    case "español":
        console.log("Hola")
        break
    case "ingles":
        console.log("Hello")
        break
    case "aimara":
        console.log("kamisaraki")
        break
    default:
        console.log("no reconoce idioma")
}

// 3. Si un numero es divisible entre 3 y 5 devolver 'fizzbuzz'
//    Si un numero es divisible entre 3 devolver 'fizz'
//    Si un numero es divisible entre 5 devolver 'buzz'
//    De lo contrario devolver el mismo número

let numeroDivisible = 20

if(numeroDivisible % 3 ===0 && numeroDivisible % 5 ===0)
{
    console.log("fizzbuzz")
} else if(numeroDivisible %3 === 0 ){
    console.log("fizz")
} else if(numeroDivisible %5 === 0 ){
    console.log("buzz")
}else
{
    console.log("mismo numero: "+ numeroDivisible)
}

// 4. Retornar true si un numero es primo sino devolver false
//    Pista: un numero primo es divisible por sí mismo y por 1

const Primo= 7; 
let esPrimo = true;

if (Primo <= 1) {
    esPrimo = false;
} else {
    for (let i = 2; i < numero; i++) {
        if (Primo % i === 0) {
            esPrimo = false;
            break;
        }
    }
}


console.log(esPrimo); 

// 5. Devolver un valor que se incremente de
// dos en dos y devuelva los menores a 10   

let o = 0
while(o < 10)
{
    console.log("while: ", o)
    o = o + 2
}

// funciones(Son Bloques de codigo que podemos reutilizar)

// declaracion

function nombreDeLaFuncion(){


}
// ejecutar, aqui estamos llamando a la funcion

nombreDeLaFuncion()

// Funciones sin parametros

function imprimirMiNombre(){
    console.log("Hola soy Jahir")
    console.log("y soy Mecatronico")
}

imprimirMiNombre()
imprimirMiNombre() // podemos repetir la utilizacion de la funcion

// funciontes con parametros y valores por defecto


function imprimirUnNombre(nombre = "Anónimo"){ //asignar valor por defecto
    //if(nombre === undefined){
 //       nombre = "Anónimo"
  //  }
    
    console.log("Hola soy: " + nombre)
}

imprimirUnNombre()
imprimirUnNombre("jahir")

function imprimirNombreYApellido(nombre, apellido, edad5)
{
    //console.log("hola Soy: "+ nombre + " "+ apellido + "y tengo :" + edad5 + "años")
    console.log(`Hola soy ${nombre} ${apellido} y tengo ${edad5} años`)
}

imprimirNombreYApellido()
imprimirNombreYApellido("jahir", "Miranda", 25)


// EJERCICIOS



// FUNCIONES SIN RETORNO

function esMayorOMenorDeEdad(edad)
{
    if(edad >= 18)
    {
        console.log("mayor de Edad")
    }else{
        console.log("menor de Edad")
    }
}

esMayorOMenorDeEdad(38)
esMayorOMenorDeEdad(8)
esMayorOMenorDeEdad(3)

// FUNCIONSS CON RETORNO

