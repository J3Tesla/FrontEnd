// tipos de datos no primitivos

// ARRAYS

// Un arreglo tiene elementos de cualquier tipo de datos: cadenas,
// booleanos, numeros, nulls, arrays, objetos, etc...

// Declaracion de ARRAYs

const arregloVacio = []

const listaDeNumeros = [25,36,89,1560]
const listaDeValores = [1,2,3,"Jahir","miranda",true,null,undefined]

console.log(arregloVacio)
console.log(listaDeNumeros)
console.log(listaDeValores)

// Lectura de los elemento de arreglo

console.log(listaDeValores[0])
console.log(listaDeValores[4])
console.log(listaDeValores[5])
console.log(listaDeValores[99])

// Escritura en un arreglo
console.log(listaDeValores)
listaDeValores[0] = "Juan"

console.log(listaDeValores)

// Insertar nuevos elementos en un arreglo al final

const listaDeNombres = ["Jahir","Alexandro","Franchesca","Yesica"]
console.log(listaDeNombres)

listaDeNombres.push("javacript")
listaDeNombres.push("css")
console.log(listaDeNombres)

// remover elementos del final del arreglo

listaDeNombres.pop()
console.log(listaDeNombres)

// Insertar un elemento en la posicion determinada

listaDeNombres.splice(3, 0, "codigo") // (posicion,0 = agregar,variable)
console.log(listaDeNombres)

// eliminar un elemento en la posicon determinada

listaDeNombres.splice(2,1, "codigo") // (posicion,1=borrar,variable(opcioal)) 1 2 3 4 5 6 ++ para borrar mas elementos
console.log(listaDeNombres)

// obtener el tamaño de nuestro arreglo

console.log(listaDeNombres.length)

// obtener el ultimo elemento

console.log(listaDeNombres[listaDeNombres.length-1])
console.log(listaDeNombres.at(0))
console.log(listaDeNombres.at(-2))


// METODO DE ARREGLOS
// nos devuelve un true si ese valor esta en el array
const languages = [
    "javascrip", "php", "python", "C", "c++" , "java", "python"
  ]
console.log(languages.includes("java"))




// METODO FILTER, NOS AYUDA A UBICAR UN LEMENTO DENTRO DEL ARREGHLO USANDO UNA CONDICION Y DEVUELVE

  "HOLA".toLowerCase()
  

  const resultado = languages.filter(function(item){
                   
    //console.log(languages)
    return item.toLowerCase().includes("c")
                   
  })
console.log(resultado)

// metodo MAP, evalue un arreglo y lo modifica, ya hay que pasarle una funcion-

  const nombresConTitulo = languages.map(function(language){
    //return "hola"
    return "*"+language+"*"
  })
  
  console.log(nombresConTitulo)

  // metodo SORT, nos ayuda a ordenar un arreglo de elementos de forma alfabetica . Muta el arreglo original 
  
const ordenandoLanguages = [...languages].sort()



console.log(ordenandoLanguages)
console.log(languages)

//Metodo FOREach, nos ayuda a correrer un arreglo sin necesidad de tener nigun retono de datos
// completa a cada uno de los arreglos, sin necesidad de crear un for 

const miArreglo = []

languages.forEach(function (language){
  miArreglo.push("el mejor: "+ language)
})

console.log(miArreglo)

// metodo REDUCE, nos ayuda a acumular los valores de un arreglo

const numeros = [3, 40, 100, 7, 50]
let suma = 0
for(let i=0; i<numeros.length; i++){
    suma = suma + numeros[i]

}

console.log(suma)

// 
const sumatoria = numeros.reduce(function(acumulator, valorActual) // sirve para acomular valores 
// formato: xXxxxx.reduce(fx,0)
{
    return acumulator + valorActual
},
0
)

console.log(sumatoria)

// OBJeTOS

const miObjetoVacio = {}

const miObjeto =
{
    nombre: "Jahir",
    apellido: "Miranda",
    colorFavorito: "Azul",
    "mi edad" : 38,
    coloresFavoritos: ["ROJO", "azul", "Verde"],
    cursos:[
        {
            id: 1,
            nombre: "matematica",
            nota : 13,
        },
        {
            id: 2,
            nombre: "algoritmos",
            nota : 20,
        }

    ],
    devolverCursosAprobados: function(){ // funtion anonima
        return this.cursos.filter(function (curso){ // el this, hace referencia a que devuelva todo lo de cursos
            return curso.nota > 13
        }) 
    }
}

console.log(miObjetoVacio)
console.log(miObjeto)

//leeer los campos de un objeto( notacion . o [])

console.log(miObjeto.nombre)
console.log(miObjeto.apellido)
console.log(miObjeto.edad)

console.log(miObjeto["mi edad"])

console.log(miObjeto.coloresFavoritos)
console.log(miObjeto.coloresFavoritos[2])

console.log(miObjeto.cursos) // array
console.log(miObjeto.cursos[1]) // {id:2,nombre:algotimo, nota:28}
console.log(miObjeto.cursos[1].nota) // accedes a la nota 20
console.log(miObjeto.cursos[1]["nota"]) // lo mismo que el anterior

console.log(miObjeto.devolverCursosAprobados) //f()
console.log(miObjeto.devolverCursosAprobados()) // nos devulve el resultado [array]

// eliminar propiedades de un objeto

console.log(miObjeto)
//delete miObjeto.colorFavorito
//delete miObjeto.cursos
delete miObjeto["mi edad"]
console.log(miObjeto)

// insertar  nueva propiedad a un objeto

miObjeto.platilloFavorito = " Ceviche con locro"
miObjeto["juevos favoritos"] = ["Crash team racing", "mario", "minecraft"]
console.log(miObjeto)

// destructuring de arreglos y objetos

// una forma de extraer las propiedades/elementos de un objeto o un arreglo en nuevas variables

// destructuring: Objetos

const nombreValue = miObjeto.nombre
const apellidoValue = miObjeto.apellido
const colorFavoritoValue = miObjeto.colorFavorito

console.log(nombreValue, apellidoValue, colorFavoritoValue)

const {nombre, apellido, colorFavorito} = miObjeto
console.log(nombre, apellido, colorFavorito)

const {
    nombre: nombreConAlias,
    apellido: apellidoConUnAlias,
    cursos: cursosConAlias
} = miObjeto

console.log(nombreConAlias, apellidoConUnAlias, cursosConAlias)

// destructuring: Arrays

const amigos = ["leo","marcial","diego","yesica", "victor"]

const [amigo1,amigo2,amigo3, ,amigo4]= amigos

console.log(amigo1,amigo2,amigo3,amigo4)


const [a1, a2, ...mejoresAmigos] = amigos
console.log(a1, a2, ...mejoresAmigos)

//SPREAD operator ( operador ...)

// Extraer las propiedades de un objeto/arreglo para reutilizarlo en otros objetos/arreglos

const producto = {
    nombre: "laptop",
    precio: 4890,
    categoria: "tech"
}

const cliente = {
    nombre: "Alessandro",
    isVip: true
}

console.log(producto + cliente) // esta forma es la incorrecta de concatenar 2 objetos ✔

const nuevoObjeto = {...producto, ...cliente} // sirve para extraer todas las propiedades 
// cuidado

console.log(nuevoObjeto)

// spread operator, evitando colisiones de propiedades

const nuevoObjetoSinColisiones = {
    product: {...producto},
    cliente: {...cliente}
}

console.log(nuevoObjetoSinColisiones)
console.log(nuevoObjetoSinColisiones.product.nombre)
console.log(nuevoObjetoSinColisiones.cliente.nombre)

// OTROS MEDOTODS DE OBJETOS

console.log(Object.keys(producto)) // para que nos devuelva solo los keys(nombre lado izquierdo)

console.log(Object.values(producto)) // para que nos devuelva solo los valores(lado derecho)


console.log(Object.entries(producto)) // convertimos un objeto en arreglo

// EJEMPLO FINAL CON OBJETOS



