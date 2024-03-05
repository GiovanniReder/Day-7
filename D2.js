/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const firstNumber = 15;
const secondNumber = 20;

if (firstNumber > secondNumber) console.log("Maggiore");
else {
  console.log("Minore");
}
/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const five = 5;
const otherNumber = 20;

if (five !== otherNumber) console.log("not equal");
else {
  console.log("equal");
}

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile 
  per 5 (suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const numero = 25;
if (numero % 5 === 0) console.log("divisibile per 5");
else {
  console.log("non è divisibile per 5");
} /* si usa % 5 === 0 perchè il resto fornito dalla divisione deve essere uguale a 0
/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro 
  addizione/sottrazione sia uguale a 8.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let primoNumeroIntero = 4;
let secondoNumeroIntero = 8;
if (primoNumeroIntero === 8 || secondoNumeroIntero === 8)
  console.log("è uguale a 8");
else {
  console.log("non è uguale a 8");
} /* in questo caso in console esce il messaggio è uguale a 8*/

if (
  primoNumeroIntero === 8 ||
  secondoNumeroIntero === 8 ||
  primoNumeroIntero + secondoNumeroIntero === 8 ||
  Math.abs(primoNumeroIntero - secondoNumeroIntero) === 8
)
  console.log("+-8");
else {
  console.log("not +- 8");
} /* in quetso caso in console esce +-8

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile 
  "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita 
  (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let totalShoppingCart = 25;
let secondaSpedizione = 10;
let secondoTotal =
  totalShoppingCart >= 50
    ? totalShoppingCart
    : totalShoppingCart + secondaSpedizione;
console.log(secondoTotal);
if (secondoTotal > 50) console.log("spedizione gratuita");
else {
  console.log("costo di spedizione pari a 10$");
}
/* const totalShoppingCart = 40
   const shippingCost = 10
   let total 
   if (totalShoppingCart>50) console.log("Free shipping") {
    else {
      console.log("il totale è", totalShoppingCart + ShippingCost)
    }
   }

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima 
  se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let secondoTotalShoppingCart = 55;
let spedizione = 10;
let discount = 0.2;
let total =
  secondoTotalShoppingCart >= 50
    ? secondoTotalShoppingCart
    : secondoTotalShoppingCart * (1 - discount) + spedizione;
console.log(total);
if (total > 50) console.log("spedizione gratuita");
else {
  console.log("costo di spedizione pari a 10$");
}
/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let primoNumero = 15;
let secondoNumero = 8;
let terzoNumero = 22;

if (primoNumero >= secondoNumero && primoNumero >= terzoNumero) {
  if (secondoNumero >= terzoNumero) {
    console.log(primoNumero, secondoNumero, terzoNumero);
  } else {
    console.log(primoNumero, terzoNumero, secondoNumero);
  }
} else if (secondoNumero >= primoNumero && secondoNumero >= terzoNumero) {
  if (primoNumero >= terzoNumero) {
    console.log(secondoNumero, primoNumero, terzoNumero);
  } else {
    console.log(secondoNumero, terzoNumero, primoNumero);
  }
} else {
  if (primoNumero >= secondoNumero) {
    console.log(terzoNumero, primoNumero, secondoNumero);
  } else {
    console.log(terzoNumero, secondoNumero, primoNumero);
  }
}

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore
     di ricerca "typeof").
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let valoreDaVerificare = 7;
if (typeof valoreDaVerificare === "number") {
  console.log(" è un numero.");
} else {
  console.log(" non è un numero.");
}

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo 
  su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let pariDispari = 5;
if (pariDispari % 2 === 0) {
  console.log("è un numero pari");
} else {
  console.log("è un numero dispari");
}

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza. */

/* SCRIVI QUI LA TUA RISPOSTA */
let val = 3;
if (val < 10 && val > 5) {
  console.log("Meno di 10");
} else if (val < 5) {
  console.log("Meno di 5");
} else {
  console.log("Uguale a 10 o maggiore");
} /* provando a cambiare il valore di let il messaggio in console cambia

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
  name: "John",
  lastName: "Doe",
  skills: ["javascript", "html", "css"],
};

/* SCRIVI QUI LA TUA RISPOSTA */
me.city = "Toronto";
console.log(me); /* city= "Toronto" è stato aggiunto alla fine

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

/* SCRIVI QUI LA TUA RISPOSTA */
delete me.lastName;
console.log(me); /* lastName non c'è più

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento 
  della proprietà "skills".
*/

/* SCRIVI QUI LA TUA RISPOSTA */
/* me.skills.splice(2, 1) */
me.skills.pop();
console.log(me); /* "css" è stato rimosso
/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
/* const daUnoADieci = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; */
const arrayVuoto = [];
arrayVuoto.push(1);
arrayVuoto.push(2);
arrayVuoto.push(3);
arrayVuoto.push(4);
arrayVuoto.push(5);
arrayVuoto.push(6);
arrayVuoto.push(7);
arrayVuoto.push(8);
arrayVuoto.push(9);
arrayVuoto.push(10);
console.log(arrayVuoto);
/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
arrayVuoto[arrayVuoto.length - 1] = 100;
console.log(arrayVuoto);
/* array1.splice(9, 1, 100)*/
