//L’utente sceglie pari o dispari e inserisce un numero da 1 a 5. Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione). Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione) Dichiariamo chi ha vinto.

// L'utente sceglie pari o dispari e inserisce un numero (da 1 a 5)
    const userNumb = Number(prompt('Inserisci un numero da 1 a 5'))
        if(userNumb % 2 == 0){
            console.log (userNumb, "L'utente ha scelto pari")
        } else{ 
            console.log(userNumb , "L'utente ha scelto dispari")
        }

// Generiamo un numero random per il pc (da 1 a 5)
    function getRandomInteger(min, max){
    return Math.floor(Math.random() * (5 - 1 + 1)) + 1;
}
    const pcNumb = getRandomInteger (1,5);
    console.log ('Numero pc:' , pcNumb)

// Sommiamo i due numeri
let sum = (userNumb + pcNumb)
console.log('La somma dei numeri è:',sum)

//Stabiliamo se la somma dei numeri è pari o dispari

    function pariDispari (sum){
        if (sum % 2 == 0){
            console.log('La somma dei numeri è pari')
        } else {
            console.log('La somma dei numeri è dispari')
        }
    }

    const sumPariDispari = pariDispari(sum)
    

//Dichiariamo chi ha vinto

if (userNumb > pcNumb){
    console.log ("Il vincitore è l'utente")
} else if (pcNumb > userNumb){
    console.log ("Il vincitore è pc")
} else {
    console.log ("parità")
}