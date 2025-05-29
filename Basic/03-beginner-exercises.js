/*
Clase 18 - Ejercicios: primeros pasos
Vídeo: https://youtu.be/1glVfFxj8a4?t=4733
*/

// 1. Escribe un comentario en una línea

//Comentario en una linea 

// 2. Escribe un comentario en varias líneas
/*
Comentario en 
Varias
Lineas 
*/
// 3. Declara variables con valores asociados a todos los datos de tipo primitivos
let nombre = "Miguel"
let edad = 40 
let programador = false 
let trabajo = undefined
let nulo = null
let simbolo = Symbol("simbolo")
let bigint = 123456789012334445566677890000923484984587n

// 4. Imprime por consola el valor de todas las variables
console.log(nombre)
console.log(edad)
console.log(programador)
console.log(trabajo)
console.log(nulo)
console.log(simbolo)
console.log(bigint)
// 5. Imprime por consola el tipo de todas las variables
console.log(typeof nombre)
console.log(typeof edad)
console.log(typeof programador)
console.log(typeof trabajo)
console.log(typeof nulo)
console.log(typeof simbolo)
console.log(typeof bigint)
// 6. A continuación, modifica los valores de las variables por otros del mismo tipo
nombre = "Juan"
edad = 30
programador = true
trabajo = "Desarrollador"
nulo = null
simbolo = Symbol("nuevoSimbolo")
bigint = 9876543210987654321n
// 7. A continuación, modifica los valores de las variables por otros de distinto tipo
nombre = 12345 // Cambiando a un número
edad = "Treinta" // Cambiando a una cadena de texto
programador = 1 // Cambiando a un número
trabajo = true // Cambiando a un booleano
nulo = undefined // Cambiando a undefined
simbolo = 42 // Cambiando a un número
bigint = "Gran número" // Cambiando a una cadena de texto
// 8. Declara constantes con valores asociados a todos los tipos de datos primitivos
const constanteNombre = "Ana"
const constanteEdad = 25
const constanteProgramador = true
const constanteTrabajo = undefined
const constanteNulo = null
const constanteSimbolo = Symbol("constanteSimbolo")
const constanteBigint = 12345678901234567890n;
// 9. A continuación, modifica los valores de las constantes
// constanteNombre = "Pedro" // Esto producirá un error porque las constantes no se pueden reasignar
// constanteEdad = 35 // Esto también producirá un error
// constanteProgramador = false // Esto también producirá un error
// constanteTrabajo = "Ingeniero" // Esto también producirá un error
// constanteNulo = "No es nulo" // Esto también producirá un error
// constanteSimbolo = Symbol("nuevoConstanteSimbolo") // Esto también producirá un error
// constanteBigint = 9876543210987654321n // Esto también producirá un error
// 10. Comenta las líneas que produzcan algún tipo de error al ejecutarse