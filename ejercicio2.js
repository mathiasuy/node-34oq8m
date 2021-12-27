// Ejercicio 2

const moment = require("moment")

let age = moment("19940907", "YYYYMMDD").fromNow();

console.log(age);

// Dada esta fecha de nacimiento: '07/09/1994', calcular la edad en años
