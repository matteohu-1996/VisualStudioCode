/*
    Le funzioni in JavaScript sono blocchi di codice riutilizzabili che possono essere eseguiti quando vengono chiamati tutte le volte che vogliamo, senza dover scrivere lo stesso codice.

    Per dichiarare una funzione utilizziamo:
        - parola chiave function
        - nome della funzione
        - una lista di parametri/argomenti tra parentesi tonde e separati da virgole
        - il blocco di codice da eseguire contenuto tra parentesi graffe (corpo della funzione)

    function nomeFunzione (parametro1, parametro2) {
        blocco di codice riutilizzabile
    }

    Per convenzione, si nominano le funzioni con dei verbi, così da far capire subito cosa fanno.
*/
function saluta() {
    console.log('Ciao!');
}

// Per eseguire la funzione, basta chiamarla per nome seguito da parentesi tonde
saluta();
saluta();
saluta();

// Possiamo anche salvare una funzione all'interno di una variabile e richiamarla nella stessa maniera. in questo caso la funzione sarà anonima, perché sarà la variabile ad assegnarle il nome
const parla = function () {
    console.log('Sto parlando');
};

parla();

// Possiamo anche richiamare funzioni all'interno di altre funzioni
function chiediEta() {
    console.log('Quanti anni hai?');
}

function chiediProfessione() {
    console.log('Che lavoro fai?');
}

function eseguiTutto() {
    saluta();
    chiediEta();
    chiediProfessione();
}

eseguiTutto();