/* Scrivi un programma che stampi in console i numeri da 1 a 100 ma che:
• per i multipli di 3 stampi “Fizz” al posto del numero.
• per i multipli di 5 stampi “Buzz”.
• per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.
*/

/* strumenti:
 • for
 • if/else
 • operatore %
 */

/* strumenti bonus 1:
 • getElementById
 • innerHTML

 */
// ho creato un div nel body, lo richiamo dentro una variabile con getelementbyid
const container = document.getElementById("container");
// ora aggiungo nel ciclo for il modo per scrivere in pagina attraverso questa costante
// stampare in console i numeri da 1 a 100:

for (let i = 1; i <= 100; i++) {
  // se il numero è divisibile per sia per 3 che per 5
  if (i % 3 == 0 && i % 5 == 0) {
    console.log("FizzBuzz");
    // scrivo in pagina
    container.innerHTML += `<p class="col" id="bg_red">FizzBuzz</p>`;
  }
  // se il numero è divisibile solo per 3
  else if (i % 3 == 0) {
    console.log("Fizz");
    // scrivo in pagina
    container.innerHTML += `<p class="col" id="bg_green">Fizz</p>`;
  }
  // se il numero è divisibile solo per 5
  else if (i % 5 == 0) {
    console.log("Buzz");
    // scrivo in pagina
    container.innerHTML += `<p class="col" id="bg_yellow">Buzz</p>`;
  }
  // se non è divisibile ne per 3 ne per 5
  else {
    console.log(i);
    // scrivo in pagina
    container.innerHTML += `<p class="col" id="bg_lightblue">${i}</p>`;
  }
}
