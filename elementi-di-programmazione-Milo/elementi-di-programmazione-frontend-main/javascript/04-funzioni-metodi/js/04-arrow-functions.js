/*
    Le arrow function sono funzioni scritte in maniera più moderna e concisa.
*/
// const calcArea = function (raggio) {
//     return 3.14 * raggio ** 2;
// }

// Non abbiamo bisogno della parola chiave function
// const calcArea = (raggio) => {
//     return 3.14 * raggio ** 2;
// }

// Se abbiamo un solo parametro, possiamo omettere le parentesi tonde. Sono OBBLIGATORIE quando abbiamo più parametri o quando non ne abbiamo proprio.
// const calcArea = raggio => {
//     return 3.14 * raggio ** 2;
// }

// Possiamo anche liberarci della parola chiave return e delle parentesi graffe, portando il blocco di codice sulla stessa linea della dichiarazione quando abbiamo un semplice return statement
const calcArea = raggio => 3.14 * raggio ** 2;

// Secondo esempio
// const saluta = function () {
//     return 'Helloooo!';
// }

const saluta = () => 'Helloooo!';
let saluto = saluta();
console.log(saluto);
