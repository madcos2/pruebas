//CLase 1 - Las bases
/* Ahora
veremos 
las
variables*/
//Declarar e inicializar variables
var nombre = "Agustina";
var apellido = "Tolosa";
//Concatenacion Agustina Tolosa
var nombreCompleto = nombre + " " + apellido;
//salida de datos
alert(nombreCompleto);
console.log("El nombre completo es: " + nombreCompleto);
let edad = 45;
let edad2 = 34;
const PI = 3.1416;
//sumaTotal=79
let sumaTotal = edad + edad2;
let calculo = edad * PI;
console.log("La suma de las edades es: " + sumaTotal);
//Ingreso de datos con prompt
let heladoFavorito = prompt("Ingresa tu sabor de helado favorito: ");
console.log("TU HELADO FAVORITO ES: " + heladoFavorito );
alert("EL HELADO FAVORITO ES: " + heladoFavorito);
//parseInt() convertir un string a numero
let kilosHelado = parseInt(prompt("Ingresa cuantos kilos comerías"));
let regaloHelado = 10 - kilosHelado;
alert("te regalamos" + " " + regaloHelado + " " + "kilos de tu helado favorito");
