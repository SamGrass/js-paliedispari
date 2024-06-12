// chiedere all'utente una parola
const inputUtente = prompt("scrivi una parola, ti dirò se è palindroma");
// creare una funzione con la parola dell'utente come argomento per sapere se è palindroma 
function palindroma(parola) {
    // prendere la parola e trasformarla in un array con ogni carattere come elemento
    let parolaDivisa = parola.split("");

    // invertire l'ordine dell'array
    let parolaInvertita = parolaDivisa.reverse();

    // far tornare l'array una stringa unica
    let parolaCollegata = parolaInvertita.join("");

    

    // se la stringa inserita dall'utente è uguale a quella invertita è palindroma
    
    // altrimenti no 
}

    
