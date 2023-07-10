/** 1. Crea un programa que pregunte al usuario un número. Mostrar los números que son 
 * múltiplos de 5 desde 1 hasta el número introducido por el usuario. **/

let num = parseInt(prompt("Escribe un numero: "));

console.log ("los multiplos de 5 hasta el numero " + num + " son");

let i = 1;
while (i <= num) {
  if (i % 5 === 0) {
    console.log(i);
  }
  i++;
};

/** 2. Crea un programa que solicite al usuario 2 números entre 1 y 50. 
 * Posteriormente mostrar en consola los números del 1 hasta el 50, pero añadir el mensaje
 *  “¡Lotería!” solo al mostrar los números indicados por el usuario. **/


let numero1 = parseInt(prompt("Ingresa el primer número (entre 1 y 50)"));
let numero2 = parseInt(prompt("Ingresa el segundo número (entre 1 y 50)"));

let contador = 1;

do {
  if (contador === numero1 || contador === numero2) {
    console.log(contador + " ¡Lotería!");
  } else {
    console.log(contador);
  }
  
  contador++;
} while (contador <= 50);


/** 3. Crea un programa que solicite al usuario números, si lo que este introduce es un 
 * número guardarlo en un arreglo. Para terminar el capturar el usuario debe ingresar el 
 * número 0. Finalmente mostrar la lista de números capturados en pantalla o en la consola. **/

let numeros = [];

do {
  let input = prompt("Ingresa una lista de números separados por comas (ingresa 0 para terminar)");
  
  let numerosIngresados = input.split(",");
  
  for (let i = 0; i < numerosIngresados.length; i++) {
    let numero = parseInt(numerosIngresados[i]);
    
    if (!isNaN(numero)) {
      numeros.push(numero);
    } else {
      console.log("Esto no es un numero " + numero)
    };
  }
} while (!numeros.includes(0));

console.log("Números capturados:", numeros);



/** 4. Crea un programa que solicite al usuario letras o palabras, si es así guardar el 
 * resultado. Para terminar de capturar el usuario no debe escribir valor alguno. Al 
 * terminar de capturar, mostrar en pantalla la concatenación de todas las palabras 
 * capturadas. **/

let palabras = "";
let input;

do {
  input = prompt("Ingresa una letra o palabra (presiona Cancelar para terminar)");

  if (input !== null) {
    palabras += input + " ";
  }
} while (input !== null);

console.log("Palabras capturadas: " + palabras);


/** 5. Crea un programa que solicite al usuario un día de la semana (ej: lunes, jueves, 
 * domingo, etc). El programa mostrará un mensaje personalizado para cada día de la semana 
 * por medio de un alert. Y seguirá pidiendo al usuario introducir otro día. En caso de 
 * que el día introducido sea domingo mostrar al usuario el mensaje “Ve a descansar” 
 * y terminar la captura de información. **/

let dia = "";

do {
 dia = prompt("ingresa un dia de la semana").toLowerCase();

 if (dia === "lunes"){
  alert ("Odia los lunes");
 } else if (dia === "martes"){
  alert ("Es martes");
 } else if (dia === "miercoles"){
  alert ("Que miercoles");
 } else if (dia === "jueves"){
  alert ("Es juerves");
 } else if (dia === "viernes"){
  alert ("Al fin viernes");
 } else if (dia === "sabado"){
  alert ("amo los sabados de flojera");
 } else if (dia === "domingo"){
  alert ("Ve a descansar");
 } else {
  alert ("Esto no es un dia de la semana")
 };

} while ( dia !== "domingo");  