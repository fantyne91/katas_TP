//EJ 17
const alien = {
  name: "Wormuck",
  race: "Cucusumusu",
  planet: "Eden",
  weight: "259kg",
};

for (let i in alien) {
    console.log(alien[i]);
}

//EJ 18
const placesToTravel = [
  { id: 5, name: "Japan" },
  { id: 11, name: "Venecia" },
  { id: 23, name: "Murcia" },
  { id: 40, name: "Santander" },
  { id: 44, name: "Filipinas" },
  { id: 59, name: "Madagascar" },
];

for (let i in placesToTravel) {    
    
    if (placesToTravel[i].id == 11 || placesToTravel[i].id == 40) {
      placesToTravel.splice(i, 1);
    }
     
}
console.log(placesToTravel);

//EJ 19

const toys = [
  { id: 5, name: "Buzz MyYear" },
  { id: 11, name: "Action Woman" },
  { id: 23, name: "Barbie Man" },
  { id: 40, name: "El gato con Guantes" },
  { id: 40, name: "El gato felix" },
];
let newArray = [];

for (let i of toys) {
    if (!i.name.includes("gato")) {
        newArray.push(i);      
        console.log(i.name);
       
    }     
}
 console.log(" ");

// EJ 20
const popularToys = [];
const toys1 = [
  { id: 5, name: "Buzz MyYear", sellCount: 10 },
  { id: 11, name: "Action Woman", sellCount: 24 },
  { id: 23, name: "Barbie Man", sellCount: 15 },
  { id: 40, name: "El gato con Guantes", sellCount: 8 },
  { id: 40, name: "El gato felix", sellCount: 35 },
];

for (let i of toys1) {
    if (i.sellCount > 15) {
        popularToys.push(i);
    }    
}
console.log(popularToys);

//EJ 21
const users = [
  { name: "Tony", years: 43 },
  { name: "Peter", years: 18 },
  { name: "Natasha", years: 14 },
  { name: "Bruce", years: 32 },
  { name: "Khamala", years: 16 },
];

for (let i of users) {
    if (i.years >= 18) {
        console.log(` ${i.name}  "Mayor de edad"`)        
    } else {
        console.log(` ${i.name}  "Menor de edad"`);  
    }
}

//EJ 22
const fruits = ["Strawberry", "Banana", "Orange", "Apple"];
const foodSchedule = [
  { name: "Heura", isVegan: true },
  { name: "Salmon", isVegan: false },
  { name: "Tofu", isVegan: true },
  { name: "Burger", isVegan: false },
  { name: "Rice", isVegan: true },
  { name: "Pasta", isVegan: true },
];

let index = 0;
for (let i = 0; i < foodSchedule.length; i++){
  if (!foodSchedule[ i ].isVegan) {
    foodSchedule[i].name = fruits[index];
    index++;
    console.log(foodSchedule[ i ].name);
  } else {
    console.log(foodSchedule[ i ].name);
    
  }
}