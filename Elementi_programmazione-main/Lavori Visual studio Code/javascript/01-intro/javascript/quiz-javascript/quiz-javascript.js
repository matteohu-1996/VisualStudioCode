// Crea una pagina web che riporti un quiz su JavaScript, che abbia un aspetto chiaro e decente, con una serie di domande fornite per le quali bisogna scegliere una di due risposte (radio buttons). Al submit del form, deve partire un controllo delle risposte giuste e sbagliate e l'utente deve essere rimandato a inizio pagina per vedere il proprio punteggio totalizzato.
// Ecco le domande:

// Quale dei seguenti è un tipo di dato primitivo in JavaScript?

// A) Array B) String

// Qual è il metodo corretto per aggiungere un elemento alla fine di un array?

// A) array.push() B) array.add()

// Quale parola chiave viene utilizzata per dichiarare una variabile che non può essere riassegnata?

// A) let B) const

// Quale dei seguenti metodi è utilizzato per convertire una stringa in un numero?

// A) parseInt() B) stringToNumber()

// Quale operatore viene utilizzato per confrontare sia il valore che il tipo di dato?

// A) == B) ===



let domandeQuiz = [
    // Domanda 1
    { nome: 'domanda1', rispostaCorretta: 'B) String' }, 
    // Domanda 2
    { nome: 'domanda2', rispostaCorretta: 'A) array.push()' },
    // Domanda 3
    { nome: 'domanda3', rispostaCorretta: 'B) const' },
    // Domanda 4
    { nome: 'domanda4', rispostaCorretta: 'A) parseInt()' },
    // Domanda 5
    { nome: 'domanda5', rispostaCorretta: 'B) ===' }
];

let form = document.querySelector(".quiz-form");

function valutaQuiz(e) {
    e.preventDefault(); 
    
    document.querySelectorAll(".blocco-domanda").forEach(blocco => {
        blocco.classList.remove("corretta", "sbagliata");
    });
    
    let punteggio = 0;
    
    domandeQuiz.forEach(domanda => { 
        let rispostaSelez = document.querySelector(`input[name="${domanda.nome}"]:checked`);
        
        if (!rispostaSelez) {
            console.log(`Domanda ${domanda.nome} non risposta`);
            return;
        }
        
        let valoreSelez = rispostaSelez.value;

        let elementoDomanda = rispostaSelez.closest(".blocco-domanda");

        if (valoreSelez === domanda.rispostaCorretta) {
            punteggio++;
            if (elementoDomanda) {
                elementoDomanda.classList.add("corretta");
            }
        } else {
            if (elementoDomanda) {
                elementoDomanda.classList.add("sbagliata");
            }
        }
    });

    alert (`Quiz completato! Il tuo punteggio finale è: ${punteggio} su ${domandeQuiz.length}`);
    window.scrollTo(0, 0); 
}


form.addEventListener("submit", valutaQuiz);