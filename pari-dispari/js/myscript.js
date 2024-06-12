// utente e computer inseriscono due numeri che si sommano, in base al risultato e la scelta pari o dispari fatta dall'utente, si decreta il vincitore

// utente inserisce pari o dispari
const parolaUtente = prompt("scrivi se la somma sarà pari o dispari");
// utente inserisce un numero da 1 a 5
const numeroUtente = parseInt(prompt("digita un numero da 1 a 5"));
console.log(numeroUtente);
// genero un numero random per il computer
const numeroCPU = Math.floor(Math.random() * 5) + 1;
console.log(numeroCPU);

// sommo i due numeri 
// // function somma(num1, num2) {
// //     return num1 + num2; 
// // }

// // console.log(somma(numeroUtente, numeroCPU));

// controllo se la somma è pari o dispari
// // function tipoNumero(totale) {
// //     return totale % 2 === 0 ? "pari" : "dispari";
// // }

// // console.log(tipoNumero(somma(numeroUtente, numeroCPU)));


// calcolo somma e se il numero è pari o dispari
function somma(num1, num2) {
    let totale = num1 + num2; 
    return totale % 2 === 0 ? "pari" : "dispari";
}

console.log(somma(numeroUtente, numeroCPU));

// dichiaro il vincitore

let risultato = parolaUtente === somma(numeroUtente, numeroCPU) ? "Hai vinto" : "Hai perso";

console.log(risultato);
