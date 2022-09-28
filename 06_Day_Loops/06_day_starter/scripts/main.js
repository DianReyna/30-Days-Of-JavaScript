console.log(countries);
alert("Open the console and check if the countries has been loaded");
// Ejercicio: Nivel 1

// #1
for (let i = 0; i <= 10; i++) {
  console.log(i);
}

let j = 0;
while (j <= 10) {
  console.log(j);
  j++;
}

let k = 0;
do {
  console.log(k);
  k++;
} while (k <= 10);

// #2
for (let m = 10; m >= 0; m--) {
  console.log(m);
}

let n = 10;
while (n >= 0) {
  console.log(n);
  n--;
}

let o = 10;
do {
  console.log(o);
  o--;
} while (o >= 0);

// #3
let num = 5;

for (let ite = 0; ite <= num; ite++) {
  console.log(ite);
}

// #4
let patron = 7;
for (let item = 0; item <= patron; item++) {
  console.log("#".repeat(item));
}

// #5
for (let a = 0; a <= 10; a++) {
  console.log(`${a} x ${a} = ${a * a}`);
}

// #6
console.log("i  i^2  i^3");
for (let b = 0; b <= 10; b++) {
  console.log(`${b}   ${b * b}  ${b * b * b}`);
}

// #7
for (let c = 0; c <= 100; c++) {
  if (c % 2 == 0) {
    console.log(c);
  }
}

// #8
for (let d = 0; d <= 100; d++) {
  if (d % 2 !== 0) {
    console.log(d);
  }
}

// #9
const primos = [];
for (let e = 2; e <= 100; e++) {
  let primo = true;
  for (let divisor = 2; divisor < e; divisor++) {
    if (e % divisor === 0) {
      primo = !primo;
      break;
    }
  }

  if (primo) primos.push(e);
}
console.log(primos);

// #10
let suma = 0;
for (let f = 0; f <= 100; f++) {
  suma += f;
}
console.log(`La suma de todos los numeros de 0 a 100 es ${suma}`);

//#11
let par = 0;
let impar = 0;
for (let g = 0; g <= 100; g++) {
  if (g % 2 === 0) {
    par += g;
  } else {
    impar += g;
  }
}
console.log(
  `La suma de todos lso pares de 0 a 100 es: ${par}. Y la suma de todos los impares de 0 a 100 es: ${impar}`
);

// #12
let arr = [];
arr.push(par, impar);
console.log(arr);

// #13
let array = [];
while (array.length < 5) {
  let random = Math.floor(Math.random() * 100);
  array.push(random);
}
console.log(array);

// #14
let arrayUnic = [];
while (arrayUnic.length < 5) {
  let rand = Math.floor(Math.random() * 100);
  if (!arrayUnic.includes(rand)) {
    arrayUnic.push(rand);
  }
}
console.log(arrayUnic);

// #15
let charact = "abcdefghijklmnopqrstuvwxyz0123456789";
let id = "";
for (let l = 0; l < 6; l++) {
  id += charact.charAt(Math.floor(Math.random() * charact.length));
}
console.log(id);

//Ejercicios: Nivel 2
// #1
let numb = 12;
let char = "abcdefghijklmnopqrstuvwxyz0123456789";
let ids = "";
for (let p = 0; p < numb; p++) {
  ids += char.charAt(Math.floor(Math.random() * char.length));
}
console.log(ids);

// #2
const hexa = "123456789abcdef";
let number = "";
for (let i = 0; i < 6; i++) {
  number += hexa.charAt(Math.floor(Math.random() * hexa.length));
}
console.log(`#${number}`);

// #3
let rgb = [];
while (rgb.length < 3) {
  rgb.push(Math.floor(Math.random() * 255));
}
console.log(`rgb(${rgb[0]},${rgb[1]},${rgb[2]})`);

const countries = [
  "Albania",
  "Bolivia",
  "Canada",
  "Denmark",
  "Ethiopia",
  "Finland",
  "Germany",
  "Hungary",
  "Ireland",
  "Japan",
  "Kenya",
];

// #4
const upper = [];
for (let i = 0; i < countries.length; i++) {
  upper.push(countries[i].toUpperCase());
}
console.log(upper);

// #5
const _length = [];
for (let i = 0; i < countries.length; i++) {
  _length.push(countries[i].length);
}
console.log(_length);

// #6
const arrays = [];
for (let i = 0; i < countries.length; i++) {
  let abrev = countries[i].slice(0, 3).toUpperCase();
  let count = countries[i].length;
  arrays.push([countries[i], abrev, count]);
}
console.log(arrays);

// #7 - 8
const land = [];
let str = "ia";
for (let i = 0; i < countries.length; i++) {
  let include = countries[i].includes(str);
  if (include) {
    land.push(countries[i]);
  }
}
if (land.length > 0) {
  console.log(land);
} else {
  console.log(`Todos estos paises no tienen la palabra ${str}`);
}

// #9
const characters = [];
for (let i in countries) {
  characters.push(countries[i].length);
}
characters.sort((a, b) => b - a);
console.log(characters[0]);

// #10
const FiveCharacter = [];
for (let i in countries) {
  countries[i].length === 5 ? FiveCharacter.push(countries[i]) : null;
}
console.log(FiveCharacter);

const webTechs = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Redux",
  "Node",
  "MongoDB",
];
// #11
let tech = [];
for (let word of webTechs) {
  tech.push(word.length);
}
let max = Math.max(...tech);
for (let longest of webTechs) {
  if (longest.length === max) {
    console.log(longest);
  }
}

// #12
const arrTech = [];
for (let techs in webTechs) {
  arrTech.push([webTechs[techs], webTechs[techs].length]);
}
console.log(arrTech);

const mernStack = ["MongoDB", "Express", "React", "Node"];

// #13
let mern = "";
for (let i in mernStack) {
  mern += mernStack[i].slice(0, 1);
}
console.log(mern);

// #14
const arrayTechs = [
  "HTML",
  "CSS",
  "JS",
  "React",
  "Redux",
  "Node",
  "Express",
  "MongoDB",
];
for (let item of arrayTechs) {
  console.log(item);
}

// #15
const fruit = ["banana", "orange", "mango", "lemon"];
let nu = fruit.length - 1;
for (let i = nu; i >= 0; i--) {
  console.log(fruit[i]);
}
console.log(nu);

// #16
const fullStack = [
  ["HTML", "CSS", "JS", "React"],
  ["Node", "Express", "MongoDB"],
];
let arrayFull = fullStack[0].concat(fullStack[fullStack.length - 1]);
for (let i = 0; i <= arrayFull.length - 1; i++) {
  console.log(`${arrayFull[i]} `);
}

// Ejercicios: Nivel 3
// #1
const newCountries = countries;

// #2
const sortedCountries = newCountries.sort();
console.log(sortedCountries);

// #3
const sortedWebTechs = webTechs.sort();
console.log(sortedWebTechs);

const sortedMernStack = mernStack.sort();
console.log(sortedMernStack);

// #4
let arrCountrie = [];
for (let i in sortedCountries) {
  let lan = sortedCountries[i].includes("land");
  if (lan) {
    arrCountrie.push(sortedCountries[i]);
  }
}
console.log(arrCountrie);

// #5
let numWord = [];
for (word of sortedCountries) {
  numWord.push(word.length);
}
let maxWord = Math.max(...numWord);
for (let longestCountrie of sortedCountries) {
  if (longestCountrie.length === maxWord) {
    console.log(longestCountrie);
  }
}

// #7
let countriesFour = [];
for (let i = 0; i < sortedCountries.length; i++) {
  sortedCountries[i].length === 4
    ? countriesFour.push(sortedCountries[i])
    : false;
}
console.log(countriesFour);
// #8
let twoMore = [];
for (const tech of sortedWebTechs) {
  [tech.split(" ").length] >= 2 ? twoMore.push(tech) : false;
}
console.log(twoMore);
// #9
let reverseCountri = [];
for (let i = sortedCountries.length - 1; i >= 0; --i) {
  reverseCountri.push(sortedCountries[i].toUpperCase());
}
console.log(reverseCountri);
