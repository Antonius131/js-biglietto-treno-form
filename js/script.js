const tripDistance = parseInt(prompt('Quanti km vuoi percorrere?'));
console.log(tripDistance);
const userAge = parseInt(prompt('Inserisci la tua età'));
console.log(userAge);
let ticketPrice = tripDistance * .26;

if (userAge < 18) {
   ticketPrice = ticketPrice * .85;
} else if (userAge >= 65) {
   ticketPrice = ticketPrice * .65;
}

const roundedPrice = ticketPrice.toFixed(2);
console.log(roundedPrice);