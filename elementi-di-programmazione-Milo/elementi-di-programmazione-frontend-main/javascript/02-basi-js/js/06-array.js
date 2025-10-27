/* 
    Gli array ci permettono di memorizzare una collezione di valori correlati tra loro.
    Sono oggetti 0-based, cioè a ogni elemento viene assegnato un indice partendo da 0.

    - Le parentesi quadre indicano l'inizio e la fine di un array.
    - Ogni elemento è separato da virgole
*/
let studenti = ['Salvatore', 'Lorena', 'Sam', 'Lucio', 'Stefano', 'Derby', 'Vincenzo'];

console.log(studenti);

// Si può estrarre un singolo elemento specifico utilizzando la bracket notation, andando a richiamare l'indice dell'array
let primoStudente = studenti[0];
let terzoStudente = studenti[2];

console.log(primoStudente, terzoStudente);

// Gli array accettano elementi di qualsiasi tipo
let ages = [20, 25, 30, 35];
console.log(ages[2]);

// Possono anche accettare elementi di tipi diversi, ma ha poco senso visto che un array contiene valori correlati tra loro
let random = ['Milo', 'Allen', 30, 20];
console.log(random);

/* ---------------------------- Proprietà length ---------------------------- */
// Possiamo risalire alla lunghezza di un array, ovvero al numero di elementi al suo interno, tramite la proprietà length
let numeroStudenti = studenti.length;
console.log(numeroStudenti);

/* -------------------------------------------------------------------------- */
/*                             Metodi degli array                             */
/* -------------------------------------------------------------------------- */

/* ---------------------------- Cambiare elementi --------------------------- */
// Oltre che per estrapolare un elemento, si può usare l'indice per modificare l'array cambiando un elemento
studenti[1] = 'Paola';
console.log(studenti);

/* --------------------------- Aggiungere elementi -------------------------- */
// Si possono aggiungere elementi alla FINE di un array con la funzione push
studenti.push('Nelson', 'Erica');
console.log(studenti);

// Se invece si volesse aggiungere un elemento all'INIZIO di un array, si può fare con la funzione unshift()
studenti.unshift('Michele');
console.log(studenti);

/* --------------------------- Rimuovere elementi --------------------------- */
// Si può rimuovere l'ULTIMO elemento di un array con la funzione pop
studenti.pop();
console.log(studenti);

// Se invece si volesse rimuovere il PRIMO elemento, si userebbe la funzione shift
studenti.shift();
console.log(studenti);

/* ---------------------------------- join ---------------------------------- */
// Il metodo join() prende gli elementi di un array e li unisce all'interno di una STRINGA separati dal carattere o caratteri che gli passiamo tra le parentesi tonde
let allAges = ages.join(', ');
console.log(allAges);

/* --------------------------------- indexOf -------------------------------- */
// Come per le stringhe, possiamo risalire all'indice di un elemento
console.log(studenti.indexOf('Lucio'));

/* --------------------------------- concat --------------------------------- */
// Il metodo concat() prende un array e ne concatena un altro
let studentiAggiornato = studenti.concat(['Massimo', 'Laura']);
console.log(studentiAggiornato);

/* -------------------------------------------------------------------------- */
/*                                  Esercizio                                 */
/* -------------------------------------------------------------------------- */
/* 
    Lista della spesa:
    - Creare due array.
        - Il primo contiene la lista dei prodotti da comprare
        - Il secondo i prezzi dei prodotti
    - Stampare in console il secondo elemento dell'array e il suo prezzo
    - Popolare la lista della spesa che ha id lista con un list element per ogni prodotto che contenga il nome del prodotto e il suo costo
    
    - Costruire un elemento html p nel quale verrà stampato il subtotale, cioè il totale senza l'iva
    
    - Costruire un elemento html p nel quale verrà stampata l' IVA(22%)
    
    - Calcolare il totale dei prezzi dei prodotti compreso d'iva e scriverlo nel paragrafo con id totale

    MINIMO 8 prodotti
*/

let prodotti = ["Pane", "Nutella", "Biscotti", "Pasta", "Carne", "Insalata", "Birra", "Farina"];
let prezzi = [1.80, 5.66, 2.00, 0.75, 12, 0.90, 2.45, 1];

//getElementById() recupero una porzione di HTML
let lista = document.getElementById("lista"); //HTMLElement
let subtotale = document.getElementById('subtotale');

// Variabile di supporto, inizializzata a zero, verrà incrementata dal ciclo for
let granTotale = 0;

for (let i = 0; i < prezzi.length; i++) {
    // console.log(prodotti[i], prezzi[i]);

    lista.innerHTML += `<li>${prodotti[i]} ${prezzi[i].toFixed(2)}€</li>`;

    granTotale += prezzi[i];
}

subtotale.innerHTML = `<strong>Subtotale:</strong> ${granTotale}€`;

let IvaDaPagare = granTotale * 0.22;

let iva = document.getElementById('iva');
console.log(iva);

iva.innerHTML = `<strong>Costo Iva(22%):</strong> ${IvaDaPagare.toFixed(2)}€`;

let totale = document.getElementById('totale');
totale.innerHTML = `<strong>Totale:</strong> ${(granTotale + IvaDaPagare).toFixed(2)}`;