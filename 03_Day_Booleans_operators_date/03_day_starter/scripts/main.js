// this is your main.js script

//Ejercicio: Nivel 1
// #1
let firstName = "Dian",
  lastName = "Reyna",
  country = "Mexico",
  city = "Veracruz",
  age = "29",
  isMarried = "false",
  now = new Date(),
  year = now.getFullYear();

console.log(typeof firstName);
console.log(typeof lastName);
console.log(typeof country);
console.log(typeof city);
console.log(typeof age);
console.log(typeof isMarried);
console.log(typeof now);
console.log(typeof year);

// #2
console.log(typeof "10" === 10);

// #3
console.log(typeof parseInt("9.8") === 10);

// #4
//true
console.log(1 == true);
console.log(true == true);
console.log(1 < 2);
//false
console.log(0 == true);
console.log(0 === false);
console.log(1 > 2);

// #5
// 1. 4 > 3  true
// 2. 4 >= 3  true
// 3. 4 < 3   false
// 4. 4 <= 3  false
// 5. 4 == 4  true
// 6.  4 === 4 true
// 7. 4 != 4 false
// 8. 4 !== 4 false
// 9. 4 != '4'  false
// 10. 4 == '4' true
// 11. 4 === '4' false
console.log(4 > 3);
console.log(4 >= 3);
console.log(4 < 3);
console.log(4 <= 3);
console.log(4 == 4);
console.log(4 === 4);
console.log(4 != 4);
console.log(4 !== 4);
console.log(4 != "4");
console.log(4 == "4");
console.log(4 === "4");
// 12. Encuentre la longitud de Python y jargon y haga una declaración de comparación falsa.
console.log("Pyton".length == "Jargon".lenght);

// #6
// 1. 4 > 3 && 10 < 12 true
// 2. 4 > 3 && 10 > 12 false
// 3. 4 > 3 || 10 < 12 true
// 4. 4 > 3 || 10 > 12  true
// 5. !(4 > 3) false
// 6. !(4 < 3) true
// 7. !(false) true
// 8. !(4 > 3 && 10 < 12) false
// 9. !(4 > 3 && 10 > 12) true
// 10. !(4 === '4') true

console.log(4 > 3 && 10 < 12);
console.log(4 > 3 && 10 > 12);
console.log(4 > 3 || 10 < 12);
console.log(4 > 3 || 10 > 12);
console.log(!(4 > 3));
console.log(!(4 < 3));
console.log(!false);
console.log(!(4 > 3 && 10 < 12));
console.log(!(4 > 3 && 10 > 12));
console.log(!(4 === "4"));
// 11. No hay 'on' tanto en dragon como en python
console.log(!("dragon".includes("on") == "python".includes("on")));

// #7
let nowDate = new Date();
console.log(nowDate.getFullYear());
console.log(nowDate.getMonth());
console.log(nowDate.getDay());
console.log(nowDate.getHours());
console.log(nowDate.getMinutes());
console.log(nowDate.getSeconds());
console.log(nowDate.getTime());

//Ejercicio: Nivel 2

// #1
let base = prompt("Ingrese la base");
let altura = prompt("Ingrese la altura");
let area = (base * altura) / 2;
console.log("El área del triangulo es:", area);

// #2
let a = prompt("Ingrese el lado a");
let b = prompt("Ingrese el lado b");
let c = prompt("Ingrese el lado c");
let perímetro = Number(a) + Number(b) + Number(c);
console.log("El perimetro del triangulo es:", perímetro);

// #3
let largo = prompt("Ingrese el largo del rectangulo");
let ancho = prompt("Ingrese el ancho del rectangulo");
let perímetroRec = 2 * (Number(largo) + Number(ancho));
let areaRec = largo * ancho;
console.log("El area del rectangulo es:", areaRec);
console.log("El perimetro del rectangulo es:", perímetroRec);

// #4
let radio = prompt("Ingrese el radio del circulo");
const Pi = 3.1415;
let areaCir = Pi * radio * radio;
let perímetroCir = 2 * Pi * radio;
console.log("El area del circulo es:", areaCir);
console.log("El perimetro del circulo es:", perímetroCir);

// #5
let x1 = 0;
let y1 = 2 * x1 - 2;
let y2 = 0;
let x2 = 2 / 2;

let intercepA = (x1, y1);
let intercepB = (x2, y2);
console.log(`X se intersecta en ${intercepA}`);
console.log(`y se intersecta en ${intercepB}`);

let slope = (y2 - y1) / (x2 - x1);
console.log(`la pendiente de ${intercepA} y ${intercepB} es: ${slope}`);

// #6
let y_1 = 2;
let y_2 = 10;
let x_1 = 2;
let x_2 = 6;

let intercepX = `(${x_1},${y_1})`;
let intercepY = `(${x_2},${y_2})`;

let slope_1 = (y_2 - y_1) / (x_2 - x_1);
console.log(`la pendiente de ${intercepX} y ${intercepY} es: ${slope_1}`);

// #7
slope === slope_1
  ? console.log(
      `Las pendientes de ${intercepA} ${intercepB} y ${intercepX} ${intercepY} son iguales`
    )
  : console.log(
      `Las pendientes de ${intercepA} ${intercepB} y ${intercepX} ${intercepY} son diferentes`
    );

// #8
let x = prompt("Ingrese el valor de X para igualar Y a 0", "y = x² + 6x + 9");
let y = x ** 2 + 6 * x + 9;
y === 0
  ? alert(`Cuando X=${x} Y=0`)
  : y >= 1 && y < 26
  ? alert(`Ingresa otro numero porque ahora Y=${y}`)
  : alert(`Ingresa un numero Negativo porque ahora Y=${y}`);

// #9
let horas = prompt("Ingrese las horas");
let tarifas = prompt("Ingrese la tarifa por hora");
let salario = horas * tarifas;
console.log(`su ganancia semanal es: ${salario}`);

// #10
let miNombre = prompt("Ingrese su nombre");
miNombre.length > 7
  ? console.log(`Su nombre: ${miNombre}, es largo`)
  : console.log(`Su nombre: ${miNombre} es corto`);

// #11
let nombre = prompt("Ingresa tu nombre");
let apellido = prompt("Ingresa tu apellido");

nombre.length > apellido.length
  ? console.log(
      `Tu primer nombre, ${nombre}, es mas largo que tu apellido, ${apellido}`
    )
  : apellido.length > nombre.length
  ? console.log(
      `Tu primer nombre, ${nombre}, es mas corto que tu apellido, ${apellido}`
    )
  : console.log("Ambos tienen la misma longitud");

// #12
let myAge = 250;
let yourAge = 25;
let mayor = myAge - yourAge;
console.log(`Soy ${mayor} años mayor que tu`);

// #13
let yearUser = prompt("Introduzca el año de nacimiento");
let born = nowDate.getFullYear() - yearUser;

born > 18
  ? console.log(`Tienes ${born} años. Tienes la edad suficiente para conducir`)
  : console.log(
      `Tienes ${born} años. Podrás conducir despues de ${18 - born} años`
    );
console.log(born);

// #14
let years = prompt("Ingrese los años que ha vivido");
let seconds = alert(`Usted ha vivido ${+years * 365 * 24 * 60 * 60} segundos `);
console.log(seconds);

// #15

console.log(
  `${nowDate.getFullYear()}-${
    nowDate.getMonth() + 1
  }-${nowDate.getDate()} ${nowDate.getHours()}:${nowDate.getMinutes()}`
);

console.log(
  `${nowDate.getDate()}-${
    nowDate.getMonth() + 1
  }-${nowDate.getFullYear()} ${nowDate.getHours()}:${nowDate.getMinutes()}`
);

console.log(
  `${nowDate.getDate()}/${
    nowDate.getMonth() + 1
  }/${nowDate.getFullYear()} ${nowDate.getHours()}:${nowDate.getMinutes()}`
);

// Ejercicio: Nivel 3
// #1
console.log(
  `${nowDate.getFullYear()}-${("0" + (nowDate.getMonth() + 1)).slice(-2)}-${(
    "0" + nowDate.getDate()
  ).slice(-2)} ${("0" + nowDate.getHours()).slice(-2)}:${(
    "0" + nowDate.getMinutes()
  ).slice(-2)}`
);
