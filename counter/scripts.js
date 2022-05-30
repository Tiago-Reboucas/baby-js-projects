var currentNumberElement = document.getElementById('currentNumber');
var currentNumberBG = currentNumberElement.style.background;
var currentNumber = 0;

function decrement(){
  if (currentNumber > -10){
    currentNumber = currentNumber - 1;
    currentNumberElement.innerHTML = currentNumber;
  }
  

  update();
}

function increment(){
  if (currentNumber < 10){
    currentNumber = currentNumber + 1;
    currentNumberElement.innerHTML = currentNumber;
  }
  

  update();
}

function update(){
  if (currentNumber == 0){
    currentNumberElement.style.background = currentNumberBG;
  }
  else if (currentNumber < 0){
    currentNumberElement.style.background = 'red';
  }
  else {
    currentNumberElement.style.background = 'green';
  }
}