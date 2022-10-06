console.log(countries);
alert("Open the console and check if the countries has been loaded");

// Ejercicio: Nivel 1
// #1
function fullName() {
  let fullName = "Dian Reyna";
  return fullName;
}

console.log(fullName());

// #2
function fullNameB(firstName, lastName) {
  return `${firstName} ${lastName}`;
}
console.log(fullNameB("Dian", "Reyna"));

// #3
function addNumbers(a, b) {
  return a + b;
}
console.log(addNumbers(2, 3));

// #4
function areaOfRectangle(l, w) {
  let area = l * w;
  return area;
}
console.log(areaOfRectangle(3, 4));

// #5
function perimeterOfRectangle(l, w) {
  let perimeter = 2 * (l + w);
  return perimeter;
}
console.log(perimeterOfRectangle(2, 3));

// #6
function volumenOfRectPrism(l, w, h) {
  let volume = l * w * h;
  return volume;
}
console.log(volumenOfRectPrism(2, 3, 4));

// #7
function areaOfCircle(r) {
  const pi = 3.1415;
  let area = pi * (r * r);
  return area;
}
console.log(areaOfCircle(3));

// #8
function circumOfCircle(r) {
  const pi = 3.1415;
  let circumference = 2 * pi * r;
  return circumference;
}
console.log(circumOfCircle(3));

// #9
function density(mass, volume) {
  let density = mass / volume;
  return density;
}
console.log(density(23, 4));

// #10
function speed(d, t) {
  let speed = d / t;
  return speed;
}
console.log(speed(30, 23));

// #11
function weight(mass) {
  const gravity = 9.8;
  let weight = mass * gravity;
  return weight;
}
console.log(weight(23));

//#12
function convertCelsiusToFahrenheit(c) {
  let f = (c * 9) / 5 + 32;
  return f;
}
console.log(convertCelsiusToFahrenheit(30));

// #13
function imc(w, h) {
  let imc = (w / (h * h)).toFixed(2);
  if (imc < 18.5) {
    return "tiene peso bajo";
  } else if (imc >= 18.5 && imc <= 24.9) {
    return "tiene peso normal";
  } else if (imc >= 25 && imc <= 29.9) {
    return "tiene sobrepeso";
  } else if (imc >= 30) {
    return "tiene obesidad";
  }
}
console.log(imc(90, 1.68));

// #14
function checkSeason(month) {
  let mont = month.toLocaleLowerCase();
  switch (true) {
    case mont === "september" || mont === "october" || mont === "november":
      return "Otoño";
      break;
    case mont === "december" || mont === "january" || mont === "february":
      return "Invierno";
      break;
    case mont === "march" || mont === "april" || mont === "may":
      return "Primavera";
      break;
    case mont === "june" || mont === "july" || mont === "august":
      return "Verano";
      break;
    default:
      return "El mes no existe";
  }
}
console.log(checkSeason("october"));

// #15
function findMax(num1, num2, num3) {
  if (num1 > num2 && num1 > num3) {
    return num1;
  } else if (num2 > num1 && num2 > num3) {
    return num2;
  } else if (num3 > num1 && num3 > num2) {
    return num3;
  }
}
console.log(findMax(0, 10, 5));
console.log(findMax(0, -10, -5));

// Ejercicios: Nivel 2
// #1
const solveLinEquation = (a, b, c) => {
  m = -a / b;
  b = -c / b;
  return `La pendiente es: ${m.toFixed(2)} y la ordenada es: ${b.toFixed(2)}`;
};

console.log(solveLinEquation(12, 2, -6));

// #2
const solveQuadratic = (a, b, c) => {
  let firstPart = -b;
  let secondPart = Math.sqrt(b ** 2 - 4 * a * c);
  let thirdPart = 2 * a;
  let result1 = (firstPart + secondPart) / thirdPart;
  let result2 = (firstPart - secondPart) / thirdPart;

  if ((a && b && c) || a == 0 || b === 0 || c === 0) {
    if (result1 != result2) {
      return `{${result1}},{${result2}} `;
    } else if (result1 === result2) {
      return `{${result1}}`;
    }
  } else {
    return `{${0}}`;
  }
};
console.log(solveQuadratic(1, 4, 4));

// #3
const printArray = (arr) => {
  for (let i of arr) {
    console.log(i);
  }
};
printArray(["hola", "adios", "chao"]);

// #4
const showDateTime = () => {
  const date = new Date();
  return `${("0" + date.getDate()).slice(-2)}/${(
    "0" +
    (date.getMonth() + 1)
  ).slice(-2)}/${date.getFullYear()} ${("0" + date.getHours()).slice(-2)}:${(
    "0" + date.getMinutes()
  ).slice(-2)}`;
};
showDateTime();

// #5
const swapValues = (x, y) => {
  tem = x;
  x = y + ((y = x), 0);
  return `x => ${x}, y => ${y}`;
};
swapValues(1, 2);

// #6
const reverseArray = (arr) => {
  let newArr = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    newArr.push(arr[i]);
  }
  return newArr;
};
console.log(reverseArray([1, 2, 3, 4, 5]));
console.log(reverseArray(["A", "B", "C"]));

// #7
const capitalizeArray = (arr) => {
  return arr;
};
console.log(capitalizeArray(["Hola", 1, 2, true]));

// #8
const addItem = (item) => {
  let arr = [];
  arr.push(item);
  return arr;
};

console.log(addItem("hola"));

// #9
const removeItem = (index) => {
  arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  arr.splice(index, 1);
  return arr;
};
removeItem(5);

// #10
const sumOfNumbers = (num) => {
  let sum = 0;
  for (let i = 0; i <= num; i++) {
    sum += i;
  }
  return sum;
};
sumOfNumbers(3);

// #11
const sumOfOdds = (num) => {
  let sum = 0;
  for (let i = 0; i <= num; i++) {
    if (i % 2 !== 0) {
      sum += i;
    }
  }
  return sum;
};
sumOfOdds(5);

// #12
const sumOfEvent = (num) => {
  let sum = 0;
  for (let i = 0; i <= num; i++) {
    if (i % 2 === 0) {
      sum += i;
    }
  }
  return sum;
};
sumOfEvent(10);

// #13
const evensAndOdds = (num) => {
  const par = [];
  const impar = [];
  if (num > 0) {
    for (let i = 0; i <= num; i++) {
      if (i % 2 === 0) {
        par.push(i);
      } else {
        impar.push(i);
      }
    }
    return `El numero de impares son ${impar.length}. El numero de pares es ${par.length}`;
  } else {
    return "El numero debe ser positivo";
  }
};
evensAndOdds(100);

// #14
const sum = (...num) => {
  let sum = 0;
  for (let i = 0; i < num.length; i++) {
    sum += num[i];
  }
  return sum;
};
sum(1, 2, 3);
sum(1, 2, 3, 4);

// #15
const randomUserIp = () => {
  ip = "172.";
  const num = Math.round(Math.random() * (31 - 28) + 28);
  const num2 = Math.round(Math.random() * 255);
  const num3 = Math.round(Math.random() * 255);
  ip = ip + num + "." + num2 + "." + num3;
  return ip;
};
randomUserIp();

// #16
const randomMacAddress = () => {
  const hex = "0123456789abcdef";
  let macAddres = "";
  let mac = [];
  while (mac.length < 6) {
    for (let i = 0; i < 2; i++) {
      macAddres += hex.charAt(Math.floor(Math.random() * hex.length));
    }
    mac.push(macAddres);
    macAddres = "";
  }
  result = mac.toString();
  return result.replaceAll(",", ":");
};
randomMacAddress();

// #17
const randomHexaNumberGenerator = () => {
  const char = "0123456789abcdef";
  let hexa = "#";
  for (let i = 0; i < 6; i++) {
    hexa += char.charAt(Math.floor(Math.random() * char.length));
  }
  return hexa;
};
randomHexaNumberGenerator();

// #18
const userIdGenerator = () => {
  const char = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let id = "";
  for (let i = 0; i < 7; i++) {
    id += char.charAt(Math.floor(Math.random() * char.length));
  }
  return id;
};

userIdGenerator();

// Ejercicios: Nivel 3
// #1
const userIdGeneratedByUser = () => {
  let char = prompt("Ingrese la cantidad de caracteres");
  let ide = prompt("Ingrese la cantidad de ID que desea que se generen");
  const str = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let id = "";
  const arr = [];
  while (arr.length < ide) {
    for (let i = 0; i < char; i++) {
      id += str.charAt(Math.floor(Math.random() * str.length));
    }
    arr.push(id);
    id = "";
  }
  return arr;
};

userIdGeneratedByUser();

// #2
const rgbColorGenerator = () => {
  let rgb = [];
  while (rgb.length < 3) {
    acc = "";
    acc = Math.floor(Math.random() * 256);
    rgb.push(acc);
  }
  return `rgb(${rgb.toString()})`;
};

rgbColorGenerator();

// #3
const arrayOfHexaColors = () => {
  const character = "0123456789abcdef";
  let hex = "#";
  let arr = [];
  random = Math.floor(Math.random() * (10 - 1) + 1);
  while (arr.length < random) {
    for (let i = 0; i < 6; i++) {
      hex += character.charAt(Math.floor(Math.random() * character.length));
    }
    arr.push(hex.toUpperCase());
    hex = "#";
  }
  return arr;
};
arrayOfHexaColors();

// #4
const arrayOfRgbColors = () => {
  let random = Math.floor(Math.random() * (10 - 1) + 1);
  let rgb = [];
  let arrRgb = [];
  while (arrRgb.length < random) {
    while (rgb.length < 3) {
      acc = "";
      acc = Math.floor(Math.random() * 256);
      rgb.push(acc);
    }
    arrRgb.push(`rgb(${rgb.toString()})`);
  }
  return arrRgb;
};

arrayOfRgbColors();

// #5
const convertHexaToRgb = (hex) => {
  let newArr = hex.toUpperCase().split("");
  let Arr = [];
  let color = [];
  let i = 0;
  for (let i in newArr) {
    switch (newArr[i]) {
      case "A":
        newArr[i] = 10;
        continue;
      case "B":
        newArr[i] = 11;
        continue;
      case "C":
        newArr[i] = 12;
        continue;
      case "D":
        newArr[i] = 13;
        continue;
      case "E":
        newArr[i] = 14;
        continue;
      case "F":
        newArr[i] = 15;
        continue;
      default:
        break;
    }
  }
  while (i < newArr.length) {
    Arr.push(newArr.slice(i, i + 2));
    i += 2;
  }
  for (let i in Arr) {
    const R = Arr[i];
    let red = R[0] * 16 + +R[1];
    color.push(red);
  }
  return `rgb (${color})`;
};
convertHexaToRgb("19BD1E");

// #6
const convertRgbToHexa = (r, g, b) => {
  function decToHex(num) {
    return num.toString(16).toUpperCase();
  }
  if ((r, g, b)) {
    return `#${decToHex(r)}${decToHex(g)}${decToHex(b)}`;
  }
};
convertRgbToHexa(25, 189, 30);
//hex = 19BD1E
//rgb= 25,189,30

// #7
const generateColors = (color, num) => {
  if (color === "hexa" && num > 0) {
    const character = "0123456789abcdef";
    let hex = "#";
    let arr = [];
    while (arr.length < num) {
      for (let i = 0; i < 6; i++) {
        hex += character.charAt(Math.floor(Math.random() * character.length));
      }
      arr.push(hex.toUpperCase());
      hex = "#";
    }
    return arr;
  }
  if (color === "rgb" && num > 0) {
    let rgb = [];
    let arrRgb = [];
    while (arrRgb.length < num) {
      while (rgb.length < 3) {
        acc = "";
        acc = Math.floor(Math.random() * 256);
        rgb.push(acc);
      }
      arrRgb.push(`rgb(${rgb.toString()})`);
    }
    return arrRgb;
  }
  return "Comprueba que estes ingreando la palabra clave y el numero correctamente";
};
generateColors("rgb", 3);

// #8
const shuffleArray = (arr) => {
  let char = arr.toString().replaceAll(",", "");
  let newArr = [];
  let num = arr.length;

  while (newArr.length < num) {
    let array = char.charAt(Math.floor(Math.random() * arr.length));
    if (!newArr.includes(array)) {
      newArr.push(array);
    }
  }
  return newArr;
};

shuffleArray(["A", "B", 1, 2]);

// #9
const factorial = (num) => {
  if (num === 0 || num === 1) {
    return 1;
  }
  if (num > 0) {
    let factorial = 1;

    for (let i = 2; i <= num; i++) {
      factorial *= i;
    }
    return factorial;
  }
};

factorial(5);

// #10
const isEmpty = (text) => {
  if (text !== "") return `El parametro contiene: ${text}`;
  else return `El parametro está vacío`;
};
isEmpty("");

// #11
const sumAll = (...num) => {
  let sum = 0;
  for (let i in num) {
    suma += num[i];
  }
  return sum;
};
sumAll(1, 3, 2, 5);

// #12
const sumOfArrayItems = (array) => {
  let suma = 0;
  for (let i in array) {
    if (typeof array[i] !== "number") {
      return `La funcion solo acepta numeros y estas ingresando: ${typeof array[
        i
      ]}`;
    } else {
      suma += array[i];
    }
  }
  return suma;
};
sumOfArrayItems([1, 2, 4]);
sumOfArrayItems([1, 2, "a", [], 4]);

// #13
const average = (array) => {
  let suma = 0;
  for (let i in array) {
    if (typeof array[i] !== "number") {
      return `La funcion solo acepta numeros y estas ingresando: ${typeof array[
        i
      ]}`;
    } else {
      suma += array[i] / array.length;
    }
  }
  return suma;
};
average([1, 2, 4]);
average([1, 2, "a", [], 4]);

// #14
const modifyArray = (array) => {
  if (array.length < 5) {
    return `Elemento no encontrado`;
  }
  let modify = array[4].toUpperCase();
  array[4] = modify;
  return array;
};
modifyArray(["Google", "Facebook", "Apple", "Amazon", "Microsoft", "IBM"]);

// #15
const isPrime = (num) => {
  if (num % 2 !== 0) {
    return `Este numero ${num} es primo`;
  } else {
    return `Este numero ${num} NO es primo`;
  }
};
isPrime(9);

// #16
const unic = (array) => {
  let elem = [];

  for (var i = 0; i < array.length; i++) {
    for (var j = 0; j < array.length; j++) {
      if (array[i] == array[j] && i != j) {
        elem.push(array[i]);
      }
    }
  }
  if (elem.length > 0) {
    return `Tiene elementos repetidos`;
  } else {
    return " Tiene elementos únicos";
  }
};
unic(["a", "b", "c"]);

// #17
const sameType = (array) => {
  let elem = [];

  for (var i = 0; i < array.length; i++) {
    for (var j = 0; j < array.length; j++) {
      if (typeof array[i] == typeof array[j] && i != j) {
        elem.push(array[i]);
      }
    }
  }

  const newElem = [...new Set(elem)];

  if (newElem.length === array.length) {
    return `Tiene el mismo tipo de dato: ${typeof array[0]}`;
  } else {
    return " Tiene diferentes tipos de datos";
  }
};
sameType(["a", "b", "1", 2]);
