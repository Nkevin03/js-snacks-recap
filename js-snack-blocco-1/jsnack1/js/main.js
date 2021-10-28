// L’utente inserisce due parole in successione, con due prompt.
// Il software stampa prima la parola più corta, poi la parola più lunga.

const a = prompt('Scrivi qualcosa');
const b = prompt('Scrivi qualcosa');

if (a.length > b.length){
    console.log(b, a);
} else {
    console.log(a, b);
}