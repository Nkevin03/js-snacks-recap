const interi = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let somma = 0
for (i = 1; i < interi.length; i = i+ 2){
    somma = somma + interi[i]
}

console.log(somma);