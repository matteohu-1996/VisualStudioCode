/**
 * Un oggeto è un contenitore di valori eterogenei messi insieme a formare una struttura unica che ha un'identità. Viene usato per rappresentirare un'entità specifica, per esempio una persona, un ordine, una fattura, una prenotazion, ecc. tramite l'aggregazione di dati e funzionalità.
 * 
 * Un oggetto possiede:
 * - Dati, ovvero proprità, rappresentate da un nome e un valore
 * - Funzionalità, ovvero metodi, rappresentati da funzioni
 * 
 * 
 * Esempio 
 * Telefono è un oggetto    Funzionalità
 * caratteristiche          - suonare
 * - colore                 - fare foto
 * - dimesioni              -musica
 * - modello
 * 
 * 
 * Esempio Javascript 
 * Utente
 *      Proprietà         Metodi
 *      - email           - login
 *      - username        - logout
 *      - n. telefono     - commentare
 * Blog post 
 *      Proprietà         Metodi
 *      - title           - publish
 *      - content         - unpublish
 *      - author          - delete
 */

// CREARE UN OGGETTO
// object literal notation = creare un oggetto letterale
let user = {
    // le proprietà sono coppie di chiave-valore separate da ,
    nome: "Mario",
    eta: 30,
    email: "mario@gmail.it",
    paese: "italia",
    post: ["Perché saltare in testa ai goomba?", "Come salvare una principessa in 10 mosse"]
};
console.log(user);

// Accedere alle proprietà
// Dot notation
console.log(user.nome);
console.log(user.post[0]);

// Sovrascrivere il valore di una proprietà
user.eta = 26;
console.log(user.eta);

// Una proprietà può assumere qualsiasi valore, compreso un altro oggetto, quindi possiamo creare oggetti annidati
let garage = {
    macchina: {
        interno: {
            vanoOggetti: "libretto",
            sedilePasseggero: "briciole"
        },
        esterno: {
            bagagliaio:"ruota di scorta"
        }
    }
}

let contenutoVanoOggetti = garage.macchina.interno.vanoOggetti;
console.log(contenutoVanoOggetti);

// Posso creare un oggetto vuoto e assegnargli in seguito le proprietà
let persona = {};
persona.nome = "Aldo";
persona.cognome = "Moro";
persona.indirizzo = {
    via: "via torino", 
    numero: 10,
    cap: "10156",
    citta: "Torino"
};
persona.eta = 34;

console.log(persona);
console.log(persona.indirizzo.citta);

/**
 * I metodi di un oggetto sono funzioni che sono associate a quell'oggetto.
 * Questi metodi possono essere usati per operazioni specifiche relative all'oggetto stesso. Vengono definiti come parte dell'oggetto e possono accedere alle proprietà dell'oggetto.
 * 
 * I metodi possono essere definiti direttamente nell'oggetto usando la notazione a oggetto.  
 * 
 * THIS è un "oggetto contestuale" rappresenta il contesto nel quale il codice si trova viene eseguito. All'interno di un oggetto creato da noi, farà riferimento all'oggetto stesso. Quindi il suo valore cambia in base a dove viene usata. Per esempio, se usata in contessto globale, farà riferimento all'oggetto glbale, che nel caso di un browser è la window.
 */

user = {
    nome: "Mario",
    eta: 30,
    email: "mario@gmail.it",
    paese: "italia",
    post: ["Perché saltare in testa ai goomba?", "Come salvare una principessa in 10 mosse"],

    // metodi
    login: function() {
        console.log("L'utente è loggato");
    },
    logout: function() {
        console.log("L'utente non è loggato");
    },
    //Possiamo anche abbreviare i metodi con questa sintassi
    stampaPost(){
        // console.log(this.post);
        console.log("Questo utente ha scritto i seguenti post:");
        this.post.forEach(post => {
            console.log(post);
        })
    }
};

user.login();
user.logout();
user.stampaPost();

// This in contesto globale
console.log(this); // finestra browser window

// -------------------------------ARRAY OGGETTI

/**
 * Negli array possiamo salvare valori di tutti i tipi, quindi possiamo anche creare array di oggetti.
 * Quando otteniamo dati da un database, nella maggior parte dei casi riceveremo array di oggetti. Per esempio, se richiediamo a una database una lista di film, questo ci darà un array di oggeti film che avranno le loro proprietà ( titolo, durata, anno, attori, regista, ecc)
 */

let post = [
    {
        title:"Super Mario Galaxy",
        likes: 30
    },
    {
        title:"Pokemon Movie 1",
        likes: 50
    }
];
console.log(post);


user = {
    nome: "Mario",
    eta: 30,
    email: "mario@gmail.it",
    paese: "italia",
   post: [
    {
        title:"Super Mario Galaxy",
        likes: 30
    },
    {
        title:"Pokemon Movie 1",
        likes: 50
    }
    ],
 // metodi
    login: function() {
        console.log("L'utente è loggato");
    },
    logout: function() {
        console.log("L'utente non è loggato");
    },
    //Possiamo anche abbreviare i metodi con questa sintassi
    stampaPost(){
        // console.log(this.post);
        console.log("Questo utente ha scritto i seguenti post:");
        this.post.forEach(post => {
            console.log(post.title, post.likes);
        })
    }
};

user.stampaPost();

// Esercizio 1

/**
 * Progettare array di oggetti canzone, ognuna con proprietà titolo, band e anno. Fare inserire all'utente una nuova canzone attraverso un prompt.
 * Visualizzare il nuovo oggetto cosi costruito.
 */
let canzoni = [
    {
        title: "The Beginning",
        band: "One ok Rock",
        year: 2012,
    },
    {
        title: "Chop Suey",
        band: "System of a Down",
        year: 2001,
    },
    {
        title: "Last Resort",
        band: "Papa Roach",
        year: 2000,
    }  
];

console.log(canzoni);
/**canzoni.push( {
    title: prompt("Titolo canzone"),
    band: prompt("Band canzone"),
    year: ("Anno Canzone"),
})
*/
console.log(canzoni[canzoni.length - 1]
);

// Esercizio 2

/**
 * Progettare un array di automobili che contiene alcuni oggetti con le proprietà marca, modello, alimentazione, anno e cavalli.
 - Visualizzare tutti i dati in console
 - Cancellare da tutte le auto la propriteà cavalli (operatore delete)
 - Modicare la proprietà anno solo nelle auto di colore bianco, impostandola a 2023.
 - Rimuovere dall'array tutte le macchine di marca fiat
 */

 let automobili = [
    {
        marca: "Fiat",
        modello: "Panda",
        colore: "nero",
        alimentazione: "Gas",
        anno: 2024,
        cavalli: 70,
    },
    {
        marca: "Mercedez",
        modello: "Marco Polo",
        colore: "bianco",
        alimentazione: "Diesel",
        anno: 2025,
        cavalli:237,
    },
     {
        marca: "Alfre",
        modello: "Batmobile",
        colore: "nero",
        alimentazione: "vegan",
        anno: 1970,
        cavalli: 100
    },
];

console.log(automobili);

for (let i = 0; i < automobili.length; i++) {
    delete automobili[i].cavalli;

    if(automobili[i].colore === "bianco")  {
        automobili[i].anno = 2023;
    }
}
console.log(automobili);

let automobiliSenzaFiat = [];

for (let i = 0; automobili< automobili.length; i++) {
    if (automobili[i].marca !== "Fiat") {
        automobiliSenzaFiat.push(automobili[i]);
    }
}
console.log(automobiliSenzaFiat);

// ------------OGGETTO MATH
/**
  JS ha tutta una serie di oggetti built.in a nostra disposizione. Uno è l'oggetto Math.
  Math ha tante proprietà e tanti metodi pronti all'uso e  per accedervi dobbiamo richiamare l'oggetto math.
 */

// Stampando l'oggetto a console, possiamo vederne proprietà e metodi

console.log(Math);

// Possiamo usare la proprietà PI di Math se ci serve il pi greco per una formula

console.log(Math.PI);

// ----------------Metodi

const area = 7.7;

// Math.round() arrotonda il valore all'intero più vicino
console.log(Math.round(area));

// Math.floor() arrotonda il valore per difetto
console.log(Math.floor(area));

// Math.ceil() arrotonda il valore per eccesso
console.log(Math.ceil(area));

// Math.trunc() elimina i decimali e lascia l'intero
console.log(Math.trunc(area));

// Math.sqrt() calcola la radice quadrata
console.log(Math.sqrt(area));

// Math.pow() eleva il primo argomento alla poteza indicata dal secondo argomento
console.log(Math.pow(area, 3));

// Generare numeri randomici
const random = Math.random();
// Math.random () genera ogni volta che lo chiamiamo un numero random compreso 0 e 1
console.log(random);
// Per generare numero random tra 1 e 100
console.log(Math.round(Math.random() * 100));



