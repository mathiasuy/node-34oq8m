// Ejercicio 3

// Dado un array de fechas, mostralas ordenadas como "DD/MM/YYYY" en consola utilizando moment

const Moment = require('moment');

const array = ['23/05/2021', '22/04/2020', '06/05/2021', '13/05/2021', '13/05/2020'];
const sortedArray  = array.sort((a,b) => new Moment(a).format('DD/MM/YYYY') - new Moment(b).format('DD/MM/YYYY'));
console.log(sortedArray);

// ['23/05/2021', '22/04/2020', '06/05/2021', '13/05/2021', '13/05/2020']

