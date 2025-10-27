/*
    Possiamo fare in modo che le nostre funzioni ci restituiscano un valore.

    Se per esempio avessimo una serie di raggi forniti da un database o da un utente e volessimo darli in pasto a una funzione che calcola l'area di un cerchio, ma non volessimo stampare l'area in console, bensì riceverla per farne qualcosa in seguito, utilizziremo la parola chiave return
*/
function calcArea(raggio) {
    let area = 3.14 * raggio ** 2;

    return area;
};

let area = calcArea(5);
console.log(area);


/* 
    return è una parola chiave utilizzata all'interno delle funzioni per restituire il valore specificato. Se non viene specificato alcun valore, la funzione restituisce undefined.
    Una volta che il codice incontra una dichiarazione di return, l'esecuzione della funzione si interrompe immediatamente. Qualsiasi codice dopo il return non verrà eseguito.
*/
function calcVolumeCilindro(area, altezza) {
    return area * altezza;
}

let volumeCilindro = calcVolumeCilindro(area, 10);
console.log(volumeCilindro);
