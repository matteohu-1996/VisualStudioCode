/*
    OPERATORI LOGICI

    Gli operatori logici sono fondamentali per la programmazione condizionale e il controllo del flusso in JavaScript. sono utilizzati per combinare espressioni booleane e per prendere decisioni basate su condizioni.
    Li utilizziamo nelle istruzioni condizionali (if, while, ecc.) per determinare quale blocco di codice eseguire. Ci permettono di combinare più condizioni in un'unica espressione logica per semplificare il codice.

    - &&    and     
    Restituisce true se entrambe le espressioni sono vere

    - ||    or
    Restituisce true se almeno una delle espressioni è vera

    - !     not
    Inverte il valore di verità di un'espressione. Se l'espressione è vera, restituisce false, e viceversa

    Gli operatori logici possono interrompere l'esecuzione non appena il risultato è determinato (ad esempio, se la prima condizione di un && è falsa, non viene valutata la seconda).
*/
/* ----------------------- Logical and (&&) e or (||) ----------------------- */
let password = '12345@789012';

if (password.length >= 12 && password.includes('@')) {
    console.log('La tua password è strasicura');
} else if (password.length >= 8 || password.includes('@') && password.length > 5) {
    console.log('La tua password è abbastanza sicura');
} else {
    console.log('La tua password non è abbasta sicura');
}

/* ----------------------------- Logical NOT (!) ---------------------------- */
console.log(!true);
console.log(!false);

let user = false; // L'utente non è loggato

// se voglio che venga eseguito il codice dell'if quando user è uguale a false, quindi non è loggato, devo usare il not
if (!user) {
    console.log("Devi effettuare l'accesso per continuare");
}