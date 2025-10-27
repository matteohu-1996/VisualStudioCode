/*
    I parametri di una funzione sono dei segnaposto che verranno poi valorizzati quando la funzione viene chiamata.
*/
function saluta(name) { // variabile locale che possiamo usare nel blocco della funz.
    console.log(`Buongiorno ${name}!`);
}

saluta('Marco'); // Passo il valore di name quando richiamo la funzione -> argomento
saluta('Astolfo');


function salutaMeglio(name, time) { // Separiamo i parametri con le virgole
    console.log(`${time} ${name}!`);
}

salutaMeglio('Lorenzo', 'Buonasera');

// Se richiamiamo una funzione che richiede dei parametri senza passargli degli argomenti, i parametri assumono il valore di undefined. Per evitare che si richiami una funzione che richiede dei parametri senza passargliene, possiamo assegnare dei valori di default
function salutaSicuro(name = 'Utente', time = 'Salve') {
    console.log(`${time} ${name}!`);
}

salutaSicuro();
salutaSicuro('Paola', 'Buon pomeriggio');