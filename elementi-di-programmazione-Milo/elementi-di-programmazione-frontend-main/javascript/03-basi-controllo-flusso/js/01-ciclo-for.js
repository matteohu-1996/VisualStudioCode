/* 
    Il ciclo for è un loop che esegue un blocco di codice per un numero determinato di volte deciso dalla sua condizione.
    La sintassi prevede:
    - Parola chiave for
    - parentesi tonde che contengono gli elementi necessari per porre la condizione
        - inizializzazione di una variabile
        - condizione per cui la variabile è vera o falsa
        - aggiornamento della variabile
    - parentesi graffe che contengono il blocco di codice da eseguire finché la condizione viene rispettata
*/
for (let i = 0; i < 5; i++) {
    console.log(`In loop: ${i}`);
}

console.log('Loop finished!');

// Difficilmente la condizione conterrà un numero fisso come il 5 qua sopra, il più delle volte cicleremo dei dati di qualche tipo.
const students = ['Erica', 'Sam', 'Michele'];

for (let i = 0; i < students.length; i++) {
    // console.log(i);
    // console.log(students[i]);
    let html = `<p>${students[i]}</p>`
    console.log(html);
    document.write(html)
}

/* -------------------------------------------------------------------------- */
/*                                  ESERCIZI                                  */
/* -------------------------------------------------------------------------- */

/* ------------------------------- Esercizio 1 ------------------------------ */
/* 
    Scrivi un loop che itera da 0 a 15. Per ogni ciclo controlla se il numero è pari o dispari. Mostra il risultato in console.
*/
// Soluzione senza if statement
const risultati = ["è pari", "è dispari"];

for (let i = 0; i <= 15; i++) {
    console.log(`${i} ${risultati[i % 2]}`);
}

// Soluzione con if statement
for (let i = 0; i <= 15; i++) {
    if (i % 2 === 0) {
        console.log(i + " è pari");
    } else {
        console.log(i + " è dispari");
    }
}

/* ------------------------------- Esercizio 2 ------------------------------ */
/* 
    Scrivi un programma per costruire in console il seguente pattern:

    *
   * *
  *   *
 *     *
*********

*/
let n = 5;
let riga = "";

for (let i = 1; i <= n; i++) {

    for (let j = 1; j <= n - i; j++) {
        riga += " ";
    }

    for (let k = 0; k < 2 * i - 1; k++) {
        if (i === 1 || i === n) {
            riga += "*";
        } else {
            if (k === 0 || k === 2 * i - 2) {
                riga += "*";
            } else {
                riga += " ";
            }
        }
    }
    riga += "\n";
}
console.log(riga);


/* ------------------------------- Esercizio 3 ------------------------------ */
/* 
    Scrivi un programma che stampi in console un pattern come il seguente triangolo, chiedendo all'utente il numero di righe tramite un prompt:
    1
    12
    123
    1234
    12345
*/
// let righe = prompt('Quante righe?');
let righe = 5; // height of pattern
let string = "";
// External loop
for (let i = 1; i <= righe; i++) {
    // Internal loop
    for (let j = 1; j <= i; j++) {
        string += j;
    }
    string += "\n";
}
console.log(string);