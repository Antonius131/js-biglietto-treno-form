const resultButton = document.getElementById('submit-result');

resultButton.addEventListener('click', function(){
   console.log(document.getElementById('distance-input').value);
   console.log(document.getElementById('age-input').value);
});

// let ticketPrice = tripDistance * .26;

// if (userAge < 18) {
//    ticketPrice = ticketPrice * .85;
// } else if (userAge >= 65) {
//    ticketPrice = ticketPrice * .65;
// }

// const roundedPrice = ticketPrice.toFixed(2);
// console.log(roundedPrice);