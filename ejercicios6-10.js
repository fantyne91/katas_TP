//EJ 6

// 1.1 Crea un bucle for que vaya desde 0 a 9 y muestralo por consola.

for (let i = 0; i <= 9; i++) {
    console.log( i );
}
console.log("");
// 1.2 Crea un bucle for que vaya desde 0 a 9 y muestralo por consola solo
// cuando el resto del numero dividido entre 2 sea 0.
 for (let i = 0; i <= 9; i++) {
     if (i % 2 == 0) {
         console.log(i);
     }
 }

// 1.3 Crea un bucle para conseguir dormir contando ovejas.
// Este bucle tiene que dar 10 vueltas, es decir, 10 console.log.
// Muestra por consola un mensaje diciendo 'Intentando dormir 🐑' en cada vuelta del bucle
// y cambia el mensaje en la décima vuelta a 'Dormido!'.
for (let i = 0; i < 10; i++){
    if (i == 9) {
        console.log("dormido");
    }
    else {
       console.log("intentando dormir"); 
    }
    

} 
//EJ 7
//Completa la función que tomando dos números como argumento devuelva el más alto.
function sum(numberOne, numberTwo) {
    if (numberOne > numberTwo) {
        console.log(numberOne);    
    }
    else {
        console.log(numberTwo);
    }  
}

//EJ 8
// Buscar la palabra más larga Completa la función 
// que tomando un array de strings como argumento 
// devuelva el más largo, en caso de que dos strings tenga la misma longitud
//  deberá devolver el primero.
// Puedes usar este array para probar tu función:
const avengers = [
  "Hulk",
  "Thor",
  "IronMan",
  "Captain A.",
  "Spiderman",
  "Captain M.",
];
function findLongestWord(params) {
    let longWord = "";
   
    for (let i of params) {
        if (i.length > longWord.length) {
            longWord = i;                 
        }
    }
    return longWord;
    
}
console.log(findLongestWord(avengers));

//EJ 9
const numbers = [1, 2, 3, 5, 45, 37, 58];

function sumAll(param) {
    let count = 0;
    for (let i = 0; i < param.length; i++) {
        count = param[i] + count;
       
    }
     return count;
}
console.log(sumAll(numbers));

//EJ 10
const numbers1 = [12, 21, 38, 5, 45, 37, 6];
function average(param) {
    let count = param.length;
    let sum = 0;
    for (let i = 0; i < count; i++) {
        sum += param[i]
       
    }
     return sum/count;
}
console.log(average(numbers1));