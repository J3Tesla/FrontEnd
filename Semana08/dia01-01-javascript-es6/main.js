console.log("Hi")

// Funciones

// Funciones sin parametros

function nombreDeLaFuncion(){ // declarando la function
    console.log("hola a todos")
}

nombreDeLaFuncion() // aqui se ejecuta la funcion

// funciones con parametros con defecto con rtorno y en multiples lineas

function calcularSiEsMayorDe18(edad = 1){
    if(edad>18){
        return "Es mayor de edad"
    }
    else{
        return "Es menor de edad"
    }
}

console.log(calcularSiEsMayorDe18)
console.log(calcularSiEsMayorDe18(25))

// Arrow function( Funciones flecha ) => 

// funciones sin parametros

const imprimiendoSaludo = () => console.log("hola a todos nuevamente")
imprimiendoSaludo()

// funciones con parametros en una linea   

const suma = (numero1,numero2) => numero1 + numero2

console.log(suma(5,5))

// Funcines con parametros y retorno en multiples lineas

const saludoEnMayusculas = (nombre) => {
    const nombreEnMayuscula = nombre.toUpperCase()

    return "Hola "  + nombreEnMayuscula + "!"
}

console.log(saludoEnMayusculas("jahir"))

// Funciones con parametros por defecto con retorno y en multiples lineas

const otroSaludoEnMayusculas = (nombre = "Anonimo") =>{
    const nombreEnMayuscula = nombre.toUpperCase()

    return "Hola "  + nombreEnMayuscula + "!"
}
console.log(otroSaludoEnMayusculas())

// PARAMETROS REST ( operador rest -> ...)

const numeros = [0,4]

function miSuma(n1,n2){
    return n1+n2
}

console.log(miSuma(4,6))
console.log(miSuma(...numeros)) // operador rest

const listaDeNumeros =  [0,6,54,3,8,165,78,25,6,34,256,14,25,36,9,8,7,1,4,56,32,32,98]

console.log(Math.max(1,8,68))
console.log(Math.max(...listaDeNumeros))
console.log(Math.min(...listaDeNumeros))

// SPREAD OPERATOR(...)
// Sirve para expandir un arreglo, llamas a funciones, incluso objetos.

const frutas = ["manzanas","sandias","duraznos","peras", "platanos"]

const verduras =["papas", "cebollas"]

const frutasYVerduras = [...frutas, ...verduras]

console.log(frutas)
console.log(verduras)
console.log(frutasYVerduras)

const persona ={
    nombre: "Vistor",
    apellido: "Django",
    edad:38,
    color: "azul"
}
const stack ={
    nombre: "react.js",
    apellido: "Django",
    nodejs: "Express.js",
    color: "rojo"
}

const personaYSuStack = {...persona ,...stack}


console.log(personaYSuStack )