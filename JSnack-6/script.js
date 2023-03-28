// Stampa il cubo dei primi N numeri, dove N è un numero indicato dall’utente.

const limit = parseInt(prompr('Inserisci il numero dei cubi che vuoi'));

for (let i = 0; i <= limit.length; i++) {
    const cubo = Math.pow(i, 3);
    console.log(cubo);
}