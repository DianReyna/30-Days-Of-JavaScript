console.log(countries);
alert("Open the browser console whenever you work on JavaScript");
alert("Open the console and check if the countries has been loaded");

// Ejercicios: Nivel 1
//#1
const array = [];

// #2
const pets = ["Cats", "Docts", "Fish", "Raccoon", "Rabit", "Frog", "Parrot"];

// #3
console.log(pets.length);

// #4
console.log(pets[0]);
let latest = pets.length - 1;
let middle = Math.floor(pets.length / 2);
console.log(pets[middle]);
console.log(pets[latest]);

// #5
const mixedDataTypes = ["Hi", 5, [4], true, 9.4, -1];

console.log(mixedDataTypes.length > 5);

// #6
const itCompanies = [
  "Facebook",
  "Google",
  "Microsoft",
  "Apple",
  "IBM",
  "Oracle",
  "Amazon",
];

// #7
console.log(itCompanies);

// #8
console.log(itCompanies.length);

// #9
console.log(itCompanies[0]);
console.log(itCompanies[Math.floor(itCompanies.length / 2)]);
console.log(itCompanies[itCompanies.length - 1]);

// #10
console.log(itCompanies[0]);
console.log(itCompanies[1]);
console.log(itCompanies[2]);
console.log(itCompanies[3]);
console.log(itCompanies[4]);
console.log(itCompanies[5]);
console.log(itCompanies[6]);

// #11
let facebook = itCompanies[0].toString().toUpperCase();
let google = itCompanies[1].toString().toUpperCase();
let microsoft = itCompanies[2].toString().toUpperCase();
let apple = itCompanies[3].toString().toUpperCase();
let ibm = itCompanies[4].toString().toUpperCase();
let oracle = itCompanies[5].toString().toUpperCase();
let amazon = itCompanies[6].toString().toUpperCase();

console.log(facebook);
console.log(google);
console.log(microsoft);
console.log(apple);
console.log(ibm);
console.log(oracle);
console.log(amazon);

// #12

console.log(
  `${itCompanies.toString().replaceAll(",", ", ")} son grandes empresas de TI`
);

// #13
let company = "facebook";
if (itCompanies.includes(company)) {
  console.log(company);
} else {
  console.log("La empresa no existe");
}

// #14
let face = itCompanies.indexOf("Facebook");
let goo = itCompanies.indexOf("Google");
let mic = itCompanies.indexOf("Microsoft");
let app = itCompanies.indexOf("Apple");
let ib = itCompanies.indexOf("IBM");
let ora = itCompanies.indexOf("Oracle");
let ama = itCompanies.indexOf("Amazon");

let letters;
switch (true) {
  case face == 0:
    letters = itCompanies[face].match(/o/g);
    if (letters.length == 2) {
      console.log(itCompanies[face]);
    }
  case goo != 0:
    letters = itCompanies[goo].match(/o/g);
    if (letters.length == 2) {
      console.log(itCompanies[goo]);
    }
  case mic != 0:
    letters = itCompanies[mic].match(/o/g);
    if (letters.length == 2) {
      console.log(itCompanies[mic]);
    }
  case app != 0:
    letters = itCompanies[app].match(/o/g);
    if (letters.length == 2) {
      console.log(itCompanies[app]);
    }
  case ib != 0:
    letters = itCompanies[ib].match(/o/g);
    if (letters.length == 2) {
      console.log(itCompanies[ib]);
    }
  case ora != 0:
    letters = itCompanies[ora].match(/o/g);
    if (letters.length == 2) {
      console.log(itCompanies[ora]);
    }
  case ama != 0:
    letters = itCompanies[ama].match(/o/g);
    if (letters.length == 2) {
      console.log(itCompanies[ama]);
    }
  default:
    console.log();
}

// #15
console.log(itCompanies.sort());

// #16
console.log(itCompanies.reverse());

//#17
console.log(itCompanies.splice(3));

// #18
console.log(itCompanies.slice(0, 4));

// #19
console.log(itCompanies.slice(2, 5));

// #20
console.log(itCompanies.shift());

// #21
console.log(itCompanies.splice(3, 3));

// #22
console.log(itCompanies.pop());

// #23
console.log(itCompanies.slice());

//Ejercicios: Nivel 2
//#1
console.log(webTechs);
console.log(countries);
//#2
let text =
  "I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.";

let regEx = /[^\w\s]/g;
let words = text.replace(regEx, "").split(" ");
console.log(words);
console.log(words.length);

// #3
const shoppingCart = ["Milk", "Coffee", "Tea", "Honey"];
console.log(shoppingCart);

//Agregar al inicio
if (shoppingCart[0] !== "Meat") {
  shoppingCart.unshift("Meat");
}
console.log(shoppingCart);

//Agregar al final
let final = shoppingCart.length - 1;
if (shoppingCart[final] !== "Sugar") {
  shoppingCart.push("Sugar");
}
console.log(shoppingCart);

//Eliminar
let allergic = prompt("Eres alergico a la miel", "SI o No");
let allergicControl = allergic.toLowerCase();
let indice = shoppingCart.indexOf("Honey");
allergicControl === "si"
  ? console.log(`La ${shoppingCart.splice(indice, 1)} se elimino de tu lista`)
  : console.log(`Tu lista no se modifico: ${shoppingCart}`);

//Modificar
let tea = shoppingCart.indexOf("Tea");
shoppingCart[tea] = "Green Tea";
console.log(shoppingCart);

// #4
let countriesExists = countries.includes("Ethiopia");

countriesExists
  ? console.log(countries[countries.indexOf("Ethiopia")])
  : countries.push("Ethiopia");

// #5
let webTechsExists = webTechs.includes("Sass");

webTechsExists
  ? console.log(`${webTechs[webTechs.indexOf("Sass")]} is a CSS preprocess`)
  : console.log(webTechs[webTechs.push("Sass") - 1]);

// #6
const frontEnd = ["HTML", "CSS", "JS", "React", "Redux"];
const backEnd = ["Node", "Express", "MongoDB"];
let fullStack = frontEnd.concat(backEnd);
console.log(fullStack);

// Ejercicio: Nivel 3
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
let agesOrder = ages.sort();
console.log(agesOrder);
console.log(`La edad minima es: ${ages[0]}`);
console.log(`La edad maxima es: ${ages[ages.length - 1]}`);

let median = ages.length / 2;
console.log(median);
console.log(ages[median]);

let prom = agesOrder.length;
let total = ages.reduce((acc, curr) => acc + curr);
let result = total / prom;
console.log(`La edad promedio es: ${result}`);

console.log(
  `El rango de edades max: ${ages[ages.length - 1]} y min: ${ages[0]}`
);

let min = Math.abs(agesOrder[0]);
let max = Math.abs(agesOrder[ages.length - 1]);
let comparacion = min === max;
console.log(comparacion);
console.log(min, max);

// #1
console.log(countries.splice(0, 9));

// #2
let countrie = (countries.length - 1) / 2;
console.log(countries.splice(countrie, 1));

// #3
let par = countries.length % 2;
par === 0 ? console.log("Es par") : console.log(countries.push("USA"));

let half = countries.length / 2;
let arrA = countries.slice(0, half);
let arrB = countries.slice(half);

console.log(arrA);
console.log(arrB);
