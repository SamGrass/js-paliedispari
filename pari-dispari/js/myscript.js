// chiedere all'utente una parola
const inputUtente = prompt("scrivi una parola, ti dirò se è palindroma");
// creare una funzione con la parola dell'utente come argomento per sapere se è palindroma 
function palindroma(parola) {
    // prendere la parola e trasformarla in un array con ogni carattere come elemento
    let parolaDivisa = parola.split('');
    console.log(parolaDivisa);

    // invertire l'ordine dell'array
    let parolaInvertita = parolaDivisa.reverse();
    console.log(parolaInvertita);

    // far tornare l'array una stringa unica
    let parolaCollegata = parolaInvertita.join('');
    console.log(parolaCollegata);

    // let parolaInvertita = parola.split("").reverse().join("");
    // console.log(parolaInvertita);
    
    // se la stringa inserita dall'utente è uguale a quella invertita è palindroma oppure no
    return parola === parolaCollegata ? console.log("la parola è palindroma") : console.log("la parola non è palindroma");
}

palindroma(inputUtente);  
