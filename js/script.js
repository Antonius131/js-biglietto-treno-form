const tripDistance = document.getElementById('distance-input');
const userAge = document.getElementById('age-input');
const resultButton = document.getElementById('submit-result');

resultButton.addEventListener('click', function(){
   let ticketPrice = tripDistance.value * .26;
   parseInt(tripDistance.value);
   parseInt(userAge.value);

   if (userAge.value < 18) {
      ticketPrice *= .85;

   } else if (userAge.value >= 65) {
      ticketPrice *= .65;
   }
   
   const roundedPrice = ticketPrice.toFixed(2);

   document.querySelector('#show-result').classList.remove('d-none');
   document.querySelector('#show-result').classList.add('d-block');

   document.getElementById('trip-distance').innerHTML = tripDistance.value;
   document.getElementById('user-age').innerHTML = userAge.value;
   document.getElementById('ticket-price').innerHTML = roundedPrice + "€";
});