// Generatore di “nomi cognomi” casuali: prendendo una lista di nomi e una
// lista di cognomi, Gatsby vuole generare una falsa lista di 3 invitati.
// Javascript - JS
// JSnack 3

const nomi = ['Luca', 'Marco', 'Diego', 'Gaia', 'Fabio'];
const cognomi = ['Spatti', 'Belotti', 'Spandre', 'Bertoni', 'Rossati'];
const lista = [];

for (let i = 0; i < 3; i++){
    lista.push(`${nomi[Math.floor(Math.random() * 3)]} ${cognomi[Math.floor(Math.random() * 3)]}`);   
}

console.log(lista)