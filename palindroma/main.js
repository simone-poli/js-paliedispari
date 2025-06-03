//Chiedere all’utente di inserire una parola Creare una funzione per capire se la parola inserita è palindroma

//L'utente inserisce una parola
const word = prompt('Inserire parola')
// inizializziamo la variabile dove andrà la parola al contrario
let paliWord = ""

//funzione per calcolare la parola e leggerla al contrario
function reverse(word){
    for (let i = word.length -1 ; i >= 0 ; i --){
        const singleLetter = word[i];
        paliWord = paliWord + singleLetter;
    }
    return paliWord;
}
console.log(reverse(word))

//SE la parola al contrario è la stessa della parola iniziale è una parola palindroma
if (paliWord === word){
    console.log('La parola è palindroma')
//ALTRIMENTI non lo è
} else {
    console.log('La parola non è palindroma')
}
