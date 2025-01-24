//EJ 23
const movies = [
  { name: "Titan A.E.", durationInMinutes: 130 },
  { name: "Nightmare before Christmas", durationInMinutes: 225 },
  { name: "Inception", durationInMinutes: 165 },
  { name: "The Lord of the Rings", durationInMinutes: 967 },
  { name: "Star Wars: A New Hope", durationInMinutes: 214 },
  { name: "Terminator", durationInMinutes: 140 },
];
    
        
const pequeña = movies.filter((m) => m.durationInMinutes < 100);
const mediana = movies.filter((m) => m.durationInMinutes > 100 && m.durationInMinutes<200);
const grande = movies.filter((m) => m.durationInMinutes > 200); 
// let pequeña = [];
// let mediana = [];
// let grande = [];

// for (let i of movies) {
//   if (i.durationInMinutes < 100) {
//     pequeña.push(i);
//   } else if (i.durationInMinutes > 100 && i.durationInMinutes < 200) {
//     mediana.push(i);
//   } else {
//     grande.push(i);
//   }
// }
 console.log(`pequeña: `, pequeña);
 console.log(`mediana:`, mediana);

 console.log(`grande:`, grande);
 
//EJ 24
const products = [
  { name: "Funko Dr. Strange", sellCount: 10 },
  { name: "Mochila de protones: Ghostbusters", sellCount: 302 },
  { name: "Sable laser FX", sellCount: 23 },
  { name: "Varita de Voldemort", sellCount: 6 },
];
let counter = 0;
for (let i of products) {
    counter+=i.sellCount;
}
console.log(counter);

//EJ 25
const products1 = [
  { name: "Funko Dr. Strange", sellCount: 10 },
  { name: "Mochila de protones: Ghostbusters", sellCount: 302 },
  { name: "Sable laser FX", sellCount: 23 },
  { name: "Varita de Voldemort", sellCount: 6 },
];
let counterSell = 0;

for (let i of products1) {
    counterSell += i.sellCount;
     
}
console.log(counterSell / products1.length);

//EJ 26
const goodProducts = [];
const badProducts = [];
const products2 = [
  { name: "Funko Dr. Strange", sellCount: 10 },
  { name: "Mochila de protones: Ghostbusters", sellCount: 302 },
  { name: "Sable laser FX", sellCount: 23 },
  { name: "Varita de Voldemort", sellCount: 6 },
];

for (let i of products1) {
    if (i.sellCount > 20) {
        goodProducts.push(i);
    } else {
        badProducts.push(i);
    }
}
console.log("Buenos", goodProducts); 
console.log("Malos", badProducts);
