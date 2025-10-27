/**ES1
Scrivi una funzione javascript che accetti due argomenti, una stringa e una lettera. La funzione conterà il numero di occorrenze della specifica lettera nella stringa


Es2
Scrivi una funzione javascript che accetta un “argomento” e ritorna il tipo di dato: oggetto, funzione, stringa, numero, undefined.

Es3
Scrivi una funzione javascript che accetta una stringa come parametro e trova la parola più lunga all’interno della frase. Es (mi chiamo Massimiliano -> Massimiliano).

Es4
Scrivi un programma che accetta (da finestra) un numero come input e inserisce un dash (-) tra due numeri pari. Es ( 823486 -> 8-234-8-6 )

Es5
Scrivi una funzione javascript che rimuova gli elementi duplicati da un array.

Es6
Dati due array, calcolare la somma degli elementi presenti nello stesso indice. Esempio:
array1 = [1,0,2,4,6]
array2 = [0,4,5,8,7]
Output = [1,4,7,12,13]

Es7
Scrivi una funzione che stampa a console tutti i numeri interi di un dato intervallo. Per i multipli di 3 stamperà *Zoom! mentre per i multipli di 5 stamperà *Boom!. Controlla anche il caso in cui il numero è divisibile sia per 3 che per 5.
*/

// esercizio 1

function contaOccorenze(testo, lettera) {
    // controlla se la lettea è un singolo carattere
    if (lettera.length !== 1) {
        return "Devi fornire una sola lettera."
    }

    let contatore = 0;
    // itera attraverso ogni carattere della stringa
    for (let i = 0; i < testo.length; i++) {
        // incrementa il contatore se il carattere è uguale alla lettera
        if (testo[i] === lettera) {
            contatore++;
        }
        return `La lettera "${lettera}" si ripete ${contatore} volte nella stringa "${testo}"`;
        }
}


console.log(contaOccorenze("Ambra","a"));
console.log(contaOccorenze("Ambra","A"));

// ESERCIZIO 2

function ottieniTipo(argomento){
    if (argomento == null) {
        return "null";
    }
    let tipo = typeof argomento;
    return `${argomento} è di tipo ${tipo}`;
}

console.log("Stringa: " + ottieniTipo("Ciao"));
console.log("Numero: " + ottieniTipo(42));
console.log("Funzione: " + ottieniTipo(function(){}));
console.log("Oggetto: " + ottieniTipo([]));
console.log("Undefined " + ottieniTipo(undefined));
console.log("Null: " + ottieniTipo(null));

// esercizio 3

function trovaParolaLunga(frase) {
    // divido gfrase in parole
    let parole = frase.split(" ");

    let parolaMax = "";

    //itero tra le parole per trovare la più lunga

    for (let i = 0; i < parole.length; i++) {
        if (parole[i].length > parolaMax.length) {
            parolaMax = parole[i];
        }
   
    }
    return parolaMax

}
let parolaLunga = trovaParolaLunga("Mi chiamo Massilimiano");
console.log(`La parola più lunga nella frase è ${parolaLunga}`);

// esercizio 4

function inserisciDash(numero) {
    let numeroStr = numero.toString();
    let risultato = "";

    for (let i = 0; i < numeroStr.length; i++) {
      risultato += numeroStr[i]; // aggiungio il carattere corrente al risultato

      // controllo se il carattere corrente e quello successivo sono pari

      if (numeroStr[i] % 2 === 0 && numeroStr[i + 1] % 2 === 0) { risultato += "-";
      }
    }
    return risultato
}

let numeroSuddiviso = inserisciDash(823486546231654321654);
console.log(numeroSuddiviso);

// esercizio 5

function rimuoviDuplicati(array) {
    // Creo un nuovo array per memorizzare i valori unici
    let senzaDuplicati = [];
    for (let i = 0; i < array.length; i++) {
        // controllo se l'elemento non è gia presente nel nuovo array
        if (!senzaDuplicati.includes(array[i])) {
            senzaDuplicati.push(array[i]); // aggiungi l'elemento se non c'é
        }
        
    }
    return senzaDuplicati;
}
let arrayOriginale = [1, 2, 2, 3, 4, 4, 5];
let arraySenzaDuplicati = rimuoviDuplicati(arrayOriginale);
console.log(arraySenzaDuplicati);


// ESERCIZIO 6
let array1 = [1,0,2,4,6]
let array2 = [0,4,5,8,7]

function sommaArray (array1, array2) {
    // creo un nuovo array per contenere i risultati
    let arraySomma = [];
    for ( let i = 0; i < array1.length; i++)
    {
        const sommaElementi = array1[i] + array2[i];
        arraySomma.push(sommaElementi);
    }
    return arraySomma;
}
let risultato = sommaArray(array1, array2);
console.log("Array 1:", array1);
console.log("Array 2:", array2);
console.log("Output:", risultato);


// esercizio 7 

function stampaIntervallo(inizio, fine) {
    for (let i = inizio; i <= fine; i++) {
        
        if (i % 3 == 0 && i % 5 == 0) {
            console.log("*ZOOM BOOM*");
            }
            else if (i % 3 == 0) {
                console.log("*Zoom");
            }
            else if (i % 5 == 0) {
                console.log("*BOOM*");
            } else {
              console.log(i);
        
            }

    }
}   
console.log("Esempio Intervallo da 1 a 15");
stampaIntervallo(1,15)
