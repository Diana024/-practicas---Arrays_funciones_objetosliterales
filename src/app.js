/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

// window.onload = function() {
//   //write your code here
//   console.log("Hello Rigo from the console!");
// };

// ARRAYS
// Ejercicio 1 -  Ensalada de fruta
let ensaladaDeFrutas = ["pera", "piña", "platano", "manzana", "kiwi"];
for (let i = 0; i < ensaladaDeFrutas.length; i++) {
  console.log(ensaladaDeFrutas); // Bucle For que muestra cada item en consola
  console.log("Las frutas que hay en la ensalada son " + ensaladaDeFrutas); // Concatena mensaje con array
}

// Ejercicio 2: Promedio de edad
let edades = [39, 35, 18, 9, 7, 4];
let suma = 0; // variable para poder sumar los valores del array edades.
for (let i = 0; i < edades.length; i++) {
  console.log(edades[i]); //imprime en consola el elemento del array segun la posicion de "i"
  suma = suma + edades[i]; // sumo el valor de cada elemento a la variable suma.
}
console.log(suma / edades.length);

//Ejercicio 3: Mis amigos.
//El resultado esperado es [“Ryan”, “Mark”]

const amigo = ["Ryan", "Kieran", "Mark", "Miguel"];
let nombres = [];
for (let i = 0; i < amigo.length; i++) {
  // let nombre = amigo[i];
  // console.log("texto: " + nombre);
  // console.log("longitud del texto: " + nombre.length);
  if (amigo[i].length === 4) {
    nombres.push(amigo[i]);
  }
}
console.log(nombres);

//Ejercicio 3: Métodos de arrays.

const listaDeSuper = ["jabon", "pasta", "azucar", "arroz", "tomates"];
listaDeSuper.push("shampoo"); //agregar un producto al final del array(.push).
console.log(listaDeSuper);

listaDeSuper.shift(); // .shift elimina el primer elemento del array.
console.log(listaDeSuper);

let largoArray = listaDeSuper.length; //Consulta el largo del array y muestralo por la consola.
console.log(largoArray);

let indice = listaDeSuper.indexOf("shampoo"); //indexOf() retorna el primer índice en el que se puede encontrar un elemento dado en el array, ó retorna -1 si el elemento no esta presente.
console.log(indice);

// FUNCIONES
// Ejercicio 1: Mi primera función

function saludo() {
  alert("Bienvenida");
}

// Ejercicio 2: Calculando el mayor
function calculoMayor(num1, num2) {
  if (num1 > num2) {
    alert(num1);
  } else if (num1 === num2) {
    alert("son iguales");
  } else {
    alert(num2);
  }
}

// Ejercicio 3: Mis amigos.

const amigo1 = ["Ryan", "Kieran", "Mark", "Miguel"];
const amigo2 = ["Ringo", "Jhon", "Paul", "George", "Ada", "Marie"];
function filtrarAmigos(myArr) {
  let nombres = [];
  for (let i = 0; i < myArr.length; i++) {
    if (myArr[i].length === 4) {
      nombres.push(myArr[i]);
    }
  }
  return nombres;
}

console.log(filtrarAmigos(amigo1));
console.log(filtrarAmigos(amigo2));

// Ejercicio 4: Tirar dados.

const dado = [1, 2, 3, 4, 5, 6];
function tirarDado() {
  let valorAleatorio = Math.floor(Math.random() * 6);
  console.log(valorAleatorio);
  return dado[valorAleatorio];
}


// OBJETOS LITERALES


//Ejercicio 1: Creando y consultando un objeto.

let toDoList = {
tipoDeTarea: "compras",
dia: "miercoles 28 de febrero",
productos: ["tomate frito", "arroz", "limones", "carne"] ,
cantidadProductos: 5,
estado: "pendiente"
const notificacion ()
("Esta tarea tiene una prioridad urgente");
}
// function (){
//   alert("Esta tarea tiene una prioridad urgente")
}
console.info(toDoList.dia); //Notación de punto (dot notation)
console.info(toDoList['tipoDeTarea']); //Notación de corchetes / llaves cuadradas o brackets (bracket notation)
console.info(toDoList['cantidadProductos']); //bracket notation










//

// }

// }
