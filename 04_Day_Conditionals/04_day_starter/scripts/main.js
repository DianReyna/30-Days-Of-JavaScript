// this is your main.js script

alert("Open the browser console whenever you work on JavaScript");

// Ejercicio: Nivel 1
// #1
let edad = prompt("Ingrese su edad");
edad >= 18
  ? console.log("Tiene la edad suficiente para conducir.")
  : console.log(`Te faltan ${18 - edad} años para conducir.`);

// #2
let myAge = 29;
let yourAge = prompt("Ingrese su edad:");

myAge > yourAge
  ? console.log(`Soy ${myAge - yourAge} años mayor que tu`)
  : console.log(`Eres ${yourAge - myAge} años mayor que yo`);

// #3
let a = 4;
let b = 3;
if (a > b) {
  console.log(`${a} es mayor que ${b}`);
} else {
  console.log(`${b} es mayor que ${a}`);
}

a > b
  ? console.log(`${a} es mayor que ${b}`)
  : console.log(`${b} es mayor que ${a}`);

// #4
let num = prompt("Ingrese un numero:");

num % 2 === 0
  ? console.log(`${num} es un numero par`)
  : console.log(`${num} es un numero impar`);

// Ejercicio: Nivel 2
// #1
let calif = prompt("Ingresa tu puntaje");

switch (true) {
  case calif > 100:
    console.log("el puntaje solo puede llegar a 100");
    break;
  case calif >= 80:
    console.log("A");
    break;
  case calif >= 70:
    console.log("B");
    break;
  case calif >= 60:
    console.log("C");
    break;
  case calif >= 50:
    console.log("D");
    break;
  case calif >= 0:
    console.log("F");
    break;
  default:
    console.log("intenta de nuevo");
}
// #2

let string = prompt("Ingrese un mes del año:");
let temp = string.toLowerCase();

if (temp == "septiembre" || temp == "octubre" || temp == "noviembre") {
  console.log("La temporada es Otoño");
} else if (temp == "diciembre" || temp == "enero" || temp == "febrero") {
  console.log("La temporada es Invierno");
} else if (temp == "marzo" || temp == "abril" || temp == "mayo") {
  console.log("La temporada es Primavera");
} else if (temp == "junio" || temp == "julio" || temp == "agosto") {
  console.log("La temporada es Verano");
} else {
  console.log("No se encontro el mes");
}

// #3
let diaSemana = prompt("¿Que día es hoy?");
let dia = diaSemana.toLowerCase();

if (dia == "sabado" || dia == "domingo") {
  console.log(`El ${dia} es fin de semana.`);
} else if (
  dia == "lunes" ||
  dia == "martes" ||
  dia == "miercoles" ||
  dia == "jueves" ||
  dia == "viernes"
) {
  console.log(`El ${dia} es un día laborable.`);
}

//Ejercicio: Nivel 3
// #1
const monthMaxDay = [
  "january",
  "march",
  "may",
  "july",
  "august",
  "october",
  "december",
];
const monthDay = ["april", "june", "september", "november"];
const monthMinDay = ["february"];

let month = prompt("Ingresa un mes:");
let monthMinuscula = month.toLowerCase().trim(" ");

switch (true) {
  case monthMaxDay.includes(monthMinuscula):
    console.log(
      `${
        monthMinuscula.charAt(0).toUpperCase() + monthMinuscula.slice(1)
      } tiene 31 dias`
    );
    break;
  // #2
  case monthMinDay.includes(monthMinuscula):
    console.log(
      `${
        monthMinuscula.charAt(0).toUpperCase() + monthMinuscula.slice(1)
      } tiene 28 dias`
    );
    break;
  case monthDay.includes(monthMinuscula):
    console.log(
      `${
        monthMinuscula.charAt(0).toUpperCase() + monthMinuscula.slice(1)
      } tiene 30 dias`
    );
    break;
  default:
    console.log(
      `"${monthMinuscula.toUpperCase()}" el mes no existe, intenta de nuevo`
    );
}
