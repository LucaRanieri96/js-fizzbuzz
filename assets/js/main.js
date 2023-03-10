/* Scrivi un programma che stampi in console i numeri da 1 a 100 ma che:
• per i multipli di 3 stampi “Fizz” al posto del numero.
• per i multipli di 5 stampi “Buzz”.
• per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.
*/

// strumenti
// • for
// • if/else
// • operatore %

// stampare in console i numeri da 1 a 100:

for (let i = 1; i <= 100; i++) {

    // se il numero è divisibile per sia per 3 che per 5
    if (i % 3 == 0 && i % 5 == 0) {
        console.log("FizzBuzz");
        // se il numero è divisibile solo per 3
      } else if (i % 3 == 0) {
        console.log("Fizz");
        // se il numero è divisibile solo per 5
      } else if (i % 5 == 0) {
        console.log("Buzz");
        // se non è divisibile ne per 3 ne per 5
      } else {
        console.log(i);
      }
}