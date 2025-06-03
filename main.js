//Chiedere all’utente di inserire una parola Creare una funzione per capire se la parola inserita è palindroma

const word = prompt('Inserire parola')

let paliWord = ""

function reverse(word){
    for (let i = word.length -1 ; i >= 0 ; i --){
        const singleLetter = word[i];
        paliWord = paliWord + singleLetter;
    }
    return paliWord;
}
console.log(reverse(word))

if (paliWord === word){
    console.log('La parola è palindroma')
} else {
    console.log('La parola non è palindroma')
}
