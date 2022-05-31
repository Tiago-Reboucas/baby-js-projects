var currentNumberElem = document.getElementById('currentNumber');
var currentNumberBG = currentNumberElem.style.background;
var startNumberElem = document.getElementById('startNumber');
var minNumberElem = document.getElementById('minNumber');
var maxNumberElem = document.getElementById('maxNumber');

startNumberElem.value = 0;
minNumberElem.value = -10;
maxNumberElem.value = 10;

var currentNumber = 0;
var minNumber = minNumberElem.valueAsNumber;
var maxNumber = maxNumberElem.valueAsNumber;

startNumberElem.min = minNumber;
startNumberElem.max = maxNumber;


function decrement(){
  updateMinmax();

  if (currentNumber > minNumber){
    currentNumber = currentNumber - 1; 
  }
  update();
}

function increment(){
  updateMinmax();

  if (currentNumber < maxNumber){
    currentNumber = currentNumber + 1;
  }
  update();
}

function update(){
  if (currentNumber == 0){
    currentNumberElem.style.background = currentNumberBG;
  }
  else if (currentNumber < 0){
    currentNumberElem.style.background = 'red';
  }
  else {
    currentNumberElem.style.background = 'green';
  }
  currentNumberElem.innerHTML = currentNumber;
}

function reset(){
  updateMinmax();

  startNumber = startNumberElem.valueAsNumber;
  if(startNumber > maxNumber){currentNumber = maxNumber}
  else if(startNumber < minNumber){currentNumber = minNumber}
  else{currentNumber = startNumber;}
  
  update();
}

function updateMinmax(){
  minNumber = minNumberElem.valueAsNumber;
  startNumberElem.min = minNumber;
  maxNumber = maxNumberElem.valueAsNumber;
  startNumberElem.max = maxNumber;
}