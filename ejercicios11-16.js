
//EJ 11
const mixedElements = [ 6, 1, 'Rayo', 1, 'vallecano', '10', 'upgrade', 8, 'hub' ];
function averageWord(param) {
    let sum = 0;
    let count = 0;
    for (let i of param) {
        if ( typeof i === 'number') {
            sum += i;
            
        } else {
            sum += i.length;
            
        }
        count++;
    }
    return sum / count;

}
console.log(averageWord(mixedElements));

//EJ 12
const duplicates = [
  "sushi",
  "pizza",
  "burger",
  "potatoe",
  "pasta",
  "ice-cream",
  "pizza",
  "chicken",
  "onion rings",
  "pasta",
  "soda",
];
function removeDuplicates(param) {
    let newArray = [];
    for (let i of param) {
        if (!newArray.includes(i)) {
            newArray.push(i);
        }
    }
    return newArray;
}
console.log(removeDuplicates(duplicates));

//EJ 13
const nameFinder = [
  "Peter",
  "Steve",
  "Tony",
  "Natasha",
  "Clint",
  "Logan",
  "Xabier",
  "Bruce",
  "Peggy",
  "Jessica",
  "Marc",
];
function finderName(param, name) {
   
    for (let i in param) {
        if (param[i] === name) {
           
            return `true, posicion ${i} ${param[i]}`;
        }       
        
    }
    return false;
}
console.log(finderName(nameFinder, "Peter"));

//EJ 14

const counterWords = [
  "code",
  "repeat",
  "eat",
  "sleep",
  "code",
  "enjoy",
  "sleep",
  "code",
  "enjoy",
  "upgrade",
  "code",
];
function repeatCounter(param) {
    let words = {}
    
    for (let i of param) {

        if (words[ i ]) {
            words[ i ]++;
        } else {
            words[ i ] = 1;
        }
    }
    return words;  
}
console.log(repeatCounter(counterWords));

//EJ 15

const products = [
  "Camiseta de Pokemon",
  "Pantalón coquinero",
  "Gorra de gansta",
  "Camiseta de Basket",
  "Cinrurón de Orión",
  "AC/DC Camiseta",
];

for (let i of products) {
    if (i.includes("Camiseta")) {
        console.log(i);
    }
}

//EJ 16

const placesToTravel = [
  "Japon",
  "Venecia",
  "Murcia",
  "Santander",
  "Filipinas",
  "Madagascar",
];

for (let i of placesToTravel) {
    console.log(i);
}