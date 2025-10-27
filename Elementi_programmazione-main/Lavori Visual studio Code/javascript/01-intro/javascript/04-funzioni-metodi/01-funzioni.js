/**
 * Le funzioni in Javascript sono blocchi di codice riutilizzabili che possono essere eseguiti quando vengono chiamati tutte le volte che vogliamo senza dover scrivere lo stesso codice.
 * 
 * Per dichiarare una funzione utilizziamo:
 *  - parola chiave function
 *  - nome della funzione
 *  - una lista di parametri/argomenti tra parentesi tonde  e separati da virgole
 *  - il blocco di codice da eseguire  contenuto tra parentesi graffe  (corpo della funzione)
 * 
 * function nomeFunzione (parametro1, parametro2) {
 * blocco di codice riutilizzabile
 * }
 * 
 * Per convenzione, si nominano le funzioni  con dei verbi, così da far capire  subito cosa fanno.

 */

function saluta() {
    console.log("Ciao!");   
}

// Per eseguire la funzione, basta chiamarla per nome da paretesi tonde

saluta();
saluta();
saluta();

// Possiamo anche salvare una funzione all'interno di una variabile e richiamarla nella stessa maniera. In questo caso la funzione sarà anonima perchè sarà la variabile ad assegnarla il nome

const parla = function() {
    console.log("Sto parlando");
};

parla();

// Possiamo anche richiamare funzioni all'interno di altri funzioni

function chiediEta() {
    console.log("Quanti anni hai?");
    
}
function chiediProfessione() {
    console.log("Che lavoro fai?");
    
}

function eseguiTutto() {
    saluta();
    chiediEta();
    chiediProfessione();
}
eseguiTutto();

/**
 * I parametri di una funzione sono dei segnaposto che verrano poi valorizzati quando la funzione viene chiamata.
 
 */

function saluta(name) { // variabile locale che possiamo usare nel blocco della funzione.
    console.log(`Buongiorno ${name}!`);

}
saluta("Marco"); // Passo il valore dei name quando richiamo la funzione -> argomento

saluta("Giacomo");

function salutaMeglio(name, time) { // Separiamo i parametri con le virgole
    console.log(`${time}` `${name}`); 

} 
salutaMeglio("Lorenzo", "Buonasera");

// Se richiamiamo una funzione che richiede dei parametri senza passargli degli argomenti, i parametri assumono il valore di undefined. Per evitare che si richiami una funzione che richiede dei parametri senza  passargliene, possiamo assegnare dei valori di default

function salutaSicuro(name = "Utente", time = "Salve") {
    console.log(`${time}` `${name}`);
}
salutaSicuro();
salutaSicuro("Paola", "Buon pomeriggio");

/**
 * Possiamo fare in modo che le nostre funzioni ci restistuiscano un valore.
 * 
 * Se per esempio avessimo una serie raggi forniti da un database o utente e volessimo darli in pasto a una funzione che calcola l'area di un cerchio, ma non volessimo stampare l'area in console bensì ricevere il dato per farne qualcosa in seguito, useremo la parova chiave  RETURN
 */

function calcArea(raggio) {
    let area = 3.14 * raggio ** 2;

    return area; 


}

let area = calcArea(5);
console.log(area);

/**
 * Return una parola chiave usato all'interno delle funzioni per restistuire il valore specificato. Se non viene specificato alcun valore, la funzione Dà undefined.
 * Una volta che il codice incontra una dichiariazione di return, l'esecuzione della funzione si interrompe immediatamente. Qualsiasi  codice dopo il return non verrà eseguito.
 */

function calcVolumeCilindro(area, altezza) {
    return area * altezza;
}

let volumeCilindro = calcVolumeCilindro(area, 10);
console.log(volumeCilindro);

/**
 * Le arrow functions sono funzioni scritte in maniera più moderna e concisa
 */

 /**const calcArea = function (raggio) {
    return 3.14 * raggio ** 2;
}
*/
// Non abbiamo bisogno della parola chiave function
//const calcArea = function (raggio) {
//    return 3.14 * raggio ** 2;
// }

// Se abbiamo un solo parametro, possiamo omettere le parentesi tonde. sono OBBLIGATORIE quando abbiamo più parametri o quando non ne abbiamo proprio.
/**const calcArea = function (raggio) {
    return 3.14 * raggio ** 2;
}
*/

// Possiamo anche liberarci della parola chiave return e della  parentesi graffe, portando il blocco di codice sulla stessa linea della dichiarazione quando abbiamo un semplice return statement
const calcArea = raggio => 3.14 * raggio ** 2;

/**const saluta = function() {
    return "Hello" ;
}
*/
const saluta = () =>"Hello";
let saluto = saluta();
console.log(saluto);

// Abbiamo visto che possiamo passare stringhe, numeri o altro come  argomento di una funzione, ma è possibile anche passare una funzione, per richiamarla o eseguirla all'interno della prima 

// Creo una arrow funciont che ha come parametro una callback function
const myFunc =(callbackFunc) => {
    // fai qualosa
    let valore = 50;
    // richiamp la funzione di callback
    callbackFunc(valore);
};

/**myFunc(function (valore) {
    //fai qualcosa
    console.log(valore);
    
});
*/
myFunc(valore => {
    //fai qualcosa
    console.log(valore);
    
});

// foEach

/**
 * forEach è un metodo degli array che permette di iterare  gli elementi di un array e si aspetta come argomento una callback function.
 * Nella callback function possiamo passaare dei parametri:
 *  - il primo sarà l'elemento dell'array che sta venendo iterato
 *  - il secondo sarà l'indice dell'elemento iterato
 */

let personaggi = ["mario", "luigi", "peach", "yoshi", "bowser"];
personaggi.forEach((personaggio, indice) => {
    console.log(personaggio, indice);
    
});

// Posso creare una funzione di callback esterna e richiamarla nel forEach
const logPersonaggio = (personaggio, indice) => {
    console.log(`${indice} - Ciao ${personaggio}!`);
};
personaggi.forEach(logPersonaggio);
// In questo caso non mettiamo le parentesi tonde quando scriviamo il nome della funzione di callback, percè stiamo fornendo il riferimento alla funzione e non la stiamo chimando. Sarà poi il metodo forEach a chiamare la funzione per ogni elemento dell'array.

// ESEMPIO PRATICO

let listaPersonaggi = document.getElementById("personaggi");
let html = ``;

personaggi.forEach(personaggio => {
    html += `<li>${personaggio}</li>`;
});

console.log(html);
listaPersonaggi.innerHTML = html;


