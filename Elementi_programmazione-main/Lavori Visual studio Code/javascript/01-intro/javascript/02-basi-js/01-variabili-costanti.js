/* VARIABILI */

let age = 25;
let year = 2025;

console.log(age, year);

age = 34;

console.log(age);

let firstname;
firstname = "Andrea";

console.log(firstname);


// COSTANTI

const POINTS = 100;

// POINTS = 50; 

console.log(POINTS);


/* 
    javascript usa piu tipi di dato:
    - String: serie di caratteri compresi tra apici o virgolette
    - Number: numeri di tutti i tipi
    - Boolean: un valore speciale che indica vero o falso
    - Null: lo usiamo per indicare esplicitamente che una variabile non ha valore
    - Undefined: come null, ma per variabili non acnora definite e viene assegnato dal browser
    - Object: strutture complesse di dati con proprietà e funzioni
*/

console.log(typeof firstname);
firstname = "Matteo";
console.log("ciao mi chiamo " + firstname + " e ho " + age + " anni!");

let ourString = "Io vengo prima. ";
ourString += "Io vengo dopo.";
console.log(ourString);

console.log(ourString.length); 

console.log(ourString[0]);

let nome = "Alberto";
let lastLetterOfName = nome[nome.length - 1];
console.log(lastLetterOfName); 

let txt = "Oggi ho svolto 12 ore di lezione";

//Metodi di ricerca

let search1 = txt.indexOf("lezione");
console.log(search1);

let search2 = txt.lastIndexOf("o");
console.log(search2);
 
// metodi per il taglio
 //metodi slice () e substring () estraggono una sezione della stringa e la restituiscono come una nuova stringa senza modificare l'originale 
let taglio1 = txt.slice(4, 10);
console.log(taglio1);

let taglio2 = txt.substring(10, 4);
console.log(taglio2);

//metodi per sostituzione
 let affermazione = "Il migliore browser del mondo è Internet Explorer";
 let sost = affermazione.replace("internet explorer" , "Google Chrome");
 console.log(sost);

 let upp = affermazione.toUpperCase();
 console.log(upp);

 let low = affermazione.toLowerCase();
 console.log(low);

 // split () divide una stringa in una lista ordinata di sotto stringhe, le raggruppa in array e restituisce questo array. La divisione avviene cercando un pattern fornito come argomento tra le parentesi tonde e indica dove il metodo deve andare a separare

 let string1 = "Ciao mi chiamo Ale";

 let arr1 = string1.split("");
 console.log(arr1);
 
 let arr2 = string1.split(" ");
 console.log(arr2);
 // questo string taglia tutti gli spazi dentro array

 // con metodo per array join() è possibile ottenere una stringa unica che concatena tutti gli elementi dell'array, separati da virgole oppure dal carattere specificatp come argomento del metodo.
 let arr3 = ["M", "I", "L", "O"];
 let string2 = arr3.join(""); //unisce 
 console.log(string2);
 
//esercizio 1
// Salvare un nome in una variabile e stamparlo in console senza l'iniziale

let name = "Maurizio";
console.log(name.slice(1));


//2
// Data una stringa, stamparla a console al contrario. Punti in più se risolta in 2 righe max compreso il console.log()
let food1 = "Sushi";
let alContrario = food1.split("").reverse().join("");
console.log(alContrario);

//3
// Elabora uno script per estrarre l'estensione di un file
// immagine86.jpg -> "L'estensione del file è jpg"

let nomeFile = "immagine86.jpg";

let estensione = nomeFile.slice(nomeFile.indexOf("."));
let estensione2 = nomeFile.split(".").pop();
console.log(estensione2);


/* numbers */

let likes = 10;
likes++; //aumento di 1


// Possiamo usare JS per calcolare il resto. Questa operazione viene anche usata per determinare se un numero è pari o dispari: se dividendo il valore per 2 il risultato è 0 allora il num è pari altrimenti no,

let resto;
resto = 11 % 3;
console.log(resto);

let numero = 5;

if (numero % 2 === 0) {
    console.log(numero + " è pari");
} else {
    console.log(numero + " è dispari");
}
// Operatori di confronto 
/* 
    > >= < <= per capire se il valore è maggiore/minore o uguale a un altro
    == != === !== 
*/

if (5 === "5") {
    console.log("Sono uguali");
}else {
    console.log("Non sono uguali");
}

// Template letterals

`` //backtick

let title = "i giochi migliori del 2025";
let author = "Mario";
let like = 30;

let conc = "L'articolo si chiama \"" + title + "\", è stato scritto da " + author + " e ha raggiunto " + like + " likes.";
console.log(conc);
let template = `L'articolo si chiama ${title} è stato scritto da ${author} e ha raggiunto ${like} likes.`;
 console.log(template);
 

 let htmlTemplate = `
    <h2>${title}</h2> 
    <p>${author}</p>
    <span>Questo articolo ha ${like} like</span>`;
console.log(htmlTemplate);
// document.write(htmlTemplate);

/* 
    Gli array ci permettono di memorizzzare una collezione di valori correlati tra loro. Sono oggetti 0-based.
    - [] indicano l'inizio e fine di un array
    - Ogni elemento all'interno è separato da virgole
*/

let docenti = ["Milo", "Dario", "Oscar", "Luca"];
console.log(docenti);

// Possiamo estrarre un singolo elemento specifico usando la bracket notation, andando a richiamare l'indice dell'array 

let primoDocente = docenti[0];
let terzoDocente = docenti[2];
console.log(primoDocente, terzoDocente);

// let random = ["milo", "oscar" , 34 ,30];

// Possiamo risalire alla lunghezza di un array, ovvero al numero di elementi al suo interno, tramite la proprietà lenth

let numeroDocenti = docenti.length
console.log(numeroDocenti);

//cambiare elementi
docenti[1] = "Davide";
console.log(docenti);

// aggiungere elementi
docenti.push("Marco", "Paola");
console.log(docenti);

docenti.unshift("Aldo");
console.log(docenti);

//rimuovere elementi
docenti.pop(); // rimuove l'ultimo
docenti.shift(); // rimuove il primo
console.log(docenti);

// Join ()
let tuttiDocenti = docenti.join(", ")
console.log(tuttiDocenti); // trasforma in stringa separando con virgola e spazi

//indexOf()
console.log(docenti.indexOf("Oscar")); //trova elemento index

//ordinamento
console.log(docenti.sort()); // stampa in ordine alfabetico

console.log(docenti.reverse()); // ordina al contrario

// Ciclo for
for (let i = 0; i < 5; i++) {
    console.log(`In loop: ${i}`);
} 
console.log("Loop finito");
// i è minore di 5 e ripete in loop finchè è vero

let studenti = ["Marco", "Luca", "Silvia", "Giovanni"];

for (let i = 0; i < studenti.length; i++) {
    console.log(i);
    console.log(studenti[i]);
}

// scrivere un loop che itera da 0 a 15. Per ogni ciclo controlla se il numero è pari o dispari e mostra in console.

for (let i = 0; i <= 15; i++) {
    if (i % 2 === 0) {
        console.log(i, "è pari");
    } else {
        console.log(i, "è dispari");
    }
}

// While
let i = 0;
while (i < 5) {
    console.log(`in loop: ${i}`);
    i++;
}

/*  
let input;
while (input !== "esci") {
    input = prompt("inserisci un comando (digita esci per uscire)")
}
*/

// if statement
let age2 = 25;
if (age2 > 20){
    console.log("tu hai più di 20 anni");
}
// if else
let password = "password";
if (password.length >= 8) {
    console.log("Password sicura");
} else {
    console.log("La password deve contenere almeno 8 caratteri");

}

// else if
let username = "Miii che pauraaaa";
if (username.length > 12) {
    console.log("lo username non deve superare 12 caratteri");
} else if (username.length >= 8) {
    console.log("Username corretto");
}else {
    console.log("Username deve avere almeno 8 caratteri");
} 

// operatore terniario
let eta = 15;
let stato = (eta >= 18) ? "Maggiorenne" : "Minorenne";
console.log(stato);



