/*
Stampa le potenze di 2 fino a 1000. 
questo snack cela un trabocchetto:  1000 non è una potenza di 2
perciò per fermarsi prima di 1000 bisogna stampare la potenza prima di incrementarla
perché altrimenti il controllo viene fatto dopo e si sfora
*/

const limitPotenza = 1000;
const potenza = 1;

while (potenza < limitPotenza) {
    console.log(potenza);
    potenza ** 2;
}
