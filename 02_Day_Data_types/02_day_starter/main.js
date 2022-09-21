// this is your main.js script
// Ejercicio: Nivel 1
// #1
let desafio = "30 días de JavaScript";
// #2
console.log(desafio);
// #3
console.log(desafio.length);
// #4
console.log(desafio.toUpperCase());
// #5
console.log(desafio.toLowerCase());
// #6
console.log(desafio.substring(0, 2));
// #7
console.log(desafio.substring(2));
// #8
console.log(desafio.includes("Script"));
// #9
console.log(desafio.split());
// #10
console.log(desafio.split(" "));
// #11
let cadena = "Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon";
console.log(cadena.split(","));
// #12
console.log(desafio.replace("JavaScript", "Pyton"));
// #13
console.log(desafio.charAt(15));
// #14
console.log(desafio.charCodeAt("J"));
// #15
console.log(desafio.indexOf("a"));
// #16
console.log(desafio.lastIndexOf("a"));
let oracion =
  "No puedes terminar una oración con porque porque porque es una conjunción";
// #17
console.log(oracion.indexOf("porque"));
// #18
console.log(oracion.lastIndexOf("porque"));
// #19
console.log(oracion.search("porque"));
// #20
console.log(desafio.trim());
// #21
console.log(desafio.startsWith("3"));
// #22
console.log(desafio.endsWith("t"));
// #23
console.log(desafio.match("a"));
// #24
let unaCadena = "30 días de";
console.log(unaCadena.concat("JavaScript"));
// #25
console.log(desafio.repeat(2));

//Ejercicio: Nivel 2
// #1
console.log(
  "The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another."
);
// #2
console.log(
  "Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."
);
// #3
console.log(typeof "10" == 10);
console.log(typeof "10" == "string");
// #4
console.log(parseFloat("9.8") == 10);
console.log(parseInt("9.8") + 1 == 10);
// #5
let text = ["Python", "jargon"];
console.log(text[0].includes("on") && text[1].includes("on"));
// #6
let jargon = "Espero que este curso no esté lleno de jargon";
console.log(text.includes("jargon"));
// #7
console.log(Math.round(Math.random() * 100));
// #8
console.log(Math.round(Math.random() * 50 + 100) - 50);
// #9
console.log(Math.round(Math.random() * 255));
// #10
let js = "JavaScript";
console.log(js.charAt(Math.round(Math.random() * 10)));
// #11
console.log("1\t1\t1\t1\t1");
console.log("2\t1\t2\t4\t8");
console.log("3\t1\t3\t9\t27");
console.log("4\t1\t4\t16\t64");
console.log("5\t1\t5\t25\t125");
// #12
let frase =
  "No puedes terminar una oración con porque porque porque es una conjunción";
console.log(frase.substring(frase.indexOf("porque"), frase.lastIndexOf("es")));

// Ejercicios: Nivel 3
// #1
let amor =
  "El amor es lo mejor que hay en este mundo. Algunos encontraron su amor y algunos todavía están buscando su amor.";
console.log(amor.match(/amor/gi).length);
// #2
let porque =
  "No puedes terminar una oración con porque porque porque es una conjunción";
console.log(porque.match(/porque/gi).length);
// #3
const sentence =
  "%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching";

console.log(sentence.replace(/[^\w\s]/g, ""));

console.log(sentence.match(/I/g).length);
console.log(sentence.match(/teaching/g).length);

// #4
let texto =
  "Él gana 5000 euros de salario por mes, bono anual de 10000 euros, cursos en línea de 15000 euros por mes.";
let ingreso = texto.match(/\d+/g);
console.log(ingreso);
console.log((+ingreso[0] + +ingreso[2]) * 12 + +ingreso[1]);
