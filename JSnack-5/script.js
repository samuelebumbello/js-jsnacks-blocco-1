/*

JSnack 5
Crea un array vuoto.
Chiedi per 6 volte all’utente di inserire un numero,
se è dispari inseriscilo nell’array

*/

const oddNumbers = [];

for(let i = 0; i < 6; i++){

  //trasformo numero in stringa
  let promptNumber = parseInt(prompt('Inserisci un numero:'));

  if(promptNumber % 2 != 0){
    console.log('numero dispari');
    oddNumbers.push(promptNumber);
    
    console.log(promptNumber);
    console.log('Numero dispari array', oddNumbers);
}else{
    console.log('numero pari');
    console.log(promptNumber);
    
  }
}