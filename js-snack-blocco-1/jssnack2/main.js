// Il software deve chiedere per 5 volte all’utente di inserire un numero.
// Il programma stampa la somma di tutti i numeri inseriti con for
// e opzionalmente con while

let somma = 0;

for (let i = 0; i < 5; i++){
    const nuovonumero = parseInt(prompt('Inserisci numero'));
    somma += nuovonumero;
}

console.log(`Somma = ${somma}`);