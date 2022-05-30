var currentNumberElement = document.getElementById('currentNumber');
var currentNumber = 0;

function decrement(){
  currentNumber = currentNumber - 1;
  currentNumberElement.innerHTML = currentNumber;
}

function increment(){
  currentNumber = currentNumber + 1;
  currentNumberElement.innerHTML = currentNumber;
}