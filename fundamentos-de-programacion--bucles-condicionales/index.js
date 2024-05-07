
// PAIR PROGRAMMING:


// VARIABLES 

let variableSinValor


let booleano1 = true
let booleano2 = false


const PI = 3.14


const TAU = PI * 2


// BOOLEANOS 

let booleanoMix0 = (booleano1 || booleano2) && (booleano1 || (!booleano1 && !booleano2))

let booleanoAnd = booleano1 == booleano2

let booleanoNot
booleanoNot = ! booleano1


// OPERADORES 

let incrementarDesp = 2
let resultadoDesp = incrementarDesp ++

let incrementarAntes = 2
let resultadoAntes = ++ incrementarAntes

// BUCLES 

let contarHasta10_2 = 0
for ( let i=0; i < 10; i++ ) {
    contarHasta10_2++
}

let postI = 0
let postJ = 0
for (let i = 0; i < 11; i++) {
    postI = postI + postJ++
}


let sumaPares = 0
for (let i = 0; i<10; i++){
    if (i % 2 === 0)
        sumaPares = sumaPares + i   
    }   


// INDIVIDUAL PROGRAMMING:

// VARIABLES 

let variableValorNumerico = 31


const MiNombre = 'Dani'


const MiNumeroFav = 5

// BOOLEANOS 

let booleanoOr = booleano1 || booleano2

let booleanoMix1 = (booleano1 && (TAU/2 == PI)) || (varianbleValorNumerico <= MiNumeroFav)

const seisNoEsNueve = 6 != 9

const booleanoMix2 = (variableValorNumerico > 0 || (MiNumeroFav * TAU)); 

// OPERADORES 

const valorSuma = MiNumeroFav + variableValorNumerico

const valorResta = MiNumeroFav - variableValorNumerico

const valorMultiplicacion = MiNumeroFav * variableValorNumerico

const valorDivision = MiNumeroFav / 3

// BUCLES 

let contarHasta10 = 0
while ( contarHasta10 !== 10 ) {
    ++contarHasta10
 }

let preI = 0
let preJ = 0
for (let i=0; i < 11; i++) {
    preI = preI + ++preJ
}

let sumaImpares = 0
for (let i=0; i < 10; i++) {
    if ( i % 2 !== 0)
    sumaImpares = sumaImpares + i
}