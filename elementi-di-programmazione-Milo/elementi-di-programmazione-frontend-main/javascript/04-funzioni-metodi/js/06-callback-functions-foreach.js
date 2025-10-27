// Abbiamo visto che possiamo passare stringhe, numeri o altro come argomento di una funzione, ma è possibile anche passare una funzione, per richiamarla o eseguirla all'interno della prima

// Creo una arrow function che ha come parametro una callback function
const myFunc = (callbackFunc) => {
    // fai qualcosa
    let valore = 50;
    // richiamo la funzione di callback
    callbackFunc(valore);
};

// myFunc(function (valore) {
//     // fai qualcosa
//     console.log(valore);
// });

myFunc(valore => {
    // fai qualcosa
    console.log(valore);
});

/* --------------------------------- forEach -------------------------------- */
/*
    forEach è un metodo degli array che permette di iterare gli elementi di un array e si aspetta come argomento una callback function.

    Nella callback function possiamo passare dei parametri:
        - il primo sarà l'elemento dell'array che sta venendo iterato
        - il secondo sarà l'indice dell'elemento iterato
*/
let personaggi = ['mario', 'luigi', 'peach', 'yoshi', 'bowser'];

personaggi.forEach((personaggio, indice) => {
    console.log(personaggio, indice);
});

// Posso creare una funzione di callback esterna e richiamarla nel forEach
const logPersonaggio = (personaggio, indice) => {
    console.log(`${indice} - Ciao ${personaggio}!`);
};

personaggi.forEach(logPersonaggio);
// In questo caso non mettiamo le parentesi tonde quando scriviamo il nome della funzione di callback, perché stiamo solo fornendo il riferimento alla funzione e non la stiamo chiamando. Sarà poi il metodo forEach a chiamare la funzione per ogni elemento dell'array

/* ----------------------------- esempio pratico ---------------------------- */
let listaPersonaggi = document.getElementById('personaggi');
let html = ``;

personaggi.forEach(personaggio => {
    html += `<li>${personaggio}</li>`;
});

console.log(html);
listaPersonaggi.innerHTML = html;