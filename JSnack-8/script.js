// Chiedi un numero di 4 cifre all’utente
// e calcola la somma di tutte le cifre che compongono il numero.

const numeroUser = prompt('Inserisci un numero di 4 cifre')
let addCifre = 0;

for (let i = 0; i < numeroUser.length; i++) {

    addCifre += parseInt(numeroUser[i]);
}

console.log(addCifre);