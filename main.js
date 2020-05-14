// Tim Hortons Simulator
'use strict'

// Global Variables
let numPleasePlayAgain_BritishColumbia = 0;
let numFreeCoffee_BritishColumbia = 0;
let numFreeDonut_BritishColumbia = 0;
let numGrandPrize_BritishColumbia = 0;

// Event Listener British Columbia
document.getElementById('simulateOnce_BritishColumbia').addEventListener('click', simulateOnce_BritishColumbia);
document.getElementById('simulate5Times_BritishColumbia').addEventListener('click', simulate5Times_BritishColumbia);
document.getElementById('untilGrandPrize_BritishColumbia').addEventListener('click', untilGrandPrize_BritishColumbia);
document.getElementById('until500Donuts_BritishColumbia').addEventListener('click', until500Donuts_BritishColumbia);

// Event Functions
function randomItem() {
  // Generate random number
  let randNum = Math.random();

  // Simulate results
  if (randNum < 0.70) {
    console.log('PleasePlayAgain_BritishColumbia');
    numPleasePlayAgain_BritishColumbia++;
    document.getElementById('PleasePlayAgain_BritishColumbia').innerHTML = numPleasePlayAgain_BritishColumbia;
    document.getElementById('results_BritishColumbia').innerHTML += '<img src="please_play_again.png">';
  } else if (randNum < 0.80) {
    console.log('FreeCoffee_BritishColumbia');
    numFreeCoffee_BritishColumbia++;
    document.getElementById('FreeCoffee_BritishColumbia').innerHTML = numFreeCoffee_BritishColumbia;
    document.getElementById('results_BritishColumbia').innerHTML += '<img src="free_donut.png">';
  } else if (randNum < 0.90) {
    console.log('FreeDonut_BritishColumbia');
    numFreeDonut_BritishColumbia++;
    document.getElementById('FreeDonut_BritishColumbia').innerHTML = numFreeDonut_BritishColumbia;
    document.getElementById('results_BritishColumbia').innerHTML += '<img src="free_donut.png">';
  } else {
    console.log('GrandPrize_BritishColumbia');
    numGrandPrize_BritishColumbia++;
    document.getElementById('GrandPrize_BritishColumbia').innerHTML = numGrandPrize_BritishColumbia;
    document.getElementById('results_BritishColumbia').innerHTML += '<img src="grand_prize.png">';
  }
}

function simulateOnce_BritishColumbia() {
  for (let n = 0; n < 1; n++) {
    randomItem();
  }
}

function simulate5Times_BritishColumbia() {
  for (let n = 0; n < 5; n++) {
    randomItem();
  }
}

function untilGrandPrize_BritishColumbia() {
  let count = 0;
  while (numGrandPrize_BritishColumbia < 1) {
    randomItem();
    count++;
  }
  console.log('count' + count);
}

function until500Donuts_BritishColumbia() {
  let count = 0;
  while (numFreeDonut_BritishColumbia < 500) {
    randomItem();
    count++;
  }
  console.log('count' + count);
}

// 

// Global Variables Alberta
let numPleasePlayAgain_Alberta = 0;
let numFreeCoffee_Alberta = 0;
let numFreeDonut_Alberta = 0;
let numGrandPrize_Alberta = 0;


// Event Listener Alberta
document.getElementById('simulateOnce_Alberta').addEventListener('click', simulateOnce_Alberta);
document.getElementById('simulate5Times_Alberta').addEventListener('click', simulate5Times_Alberta);
document.getElementById('untilGrandPrize_Alberta').addEventListener('click', untilGrandPrize_Alberta);
document.getElementById('until500Donuts_Alberta').addEventListener('click', until500Donuts_Alberta);

// Event Functions
function randomItem() {
  // Generate random number
  let randNum = Math.random();

  // Simulate results
  if (randNum < 0.15) {
    console.log('PleasePlayAgain_Alberta');
    numPleasePlayAgain_Alberta++;
    document.getElementById('PleasePlayAgain_Alberta').innerHTML = numPleasePlayAgain_Alberta;
    document.getElementById('results_Alberta').innerHTML += '<img src="please_play_again.png">';
  } else if (randNum < 0.55) {
    console.log('FreeCoffee_Alberta');
    numFreeCoffee_Alberta++;
    document.getElementById('FreeCoffee_Alberta').innerHTML = numFreeCoffee_Alberta;
    document.getElementById('results_Alberta').innerHTML += '<img src="free_donut.png">';
  } else if (randNum < 0.95) {
    console.log('FreeDonut_Alberta');
    numFreeDonut_Alberta++;
    document.getElementById('FreeDonut_Alberta').innerHTML = numFreeDonut_Alberta;
    document.getElementById('results_Alberta').innerHTML += '<img src="free_donut.png">';
  } else {
    console.log('GrandPrize_Alberta');
    numGrandPrize_Alberta++;
    document.getElementById('GrandPrize_Alberta').innerHTML = numGrandPrize_Alberta;
    document.getElementById('results_Alberta').innerHTML += '<img src="grand_prize.png">';
  }
}

function simulateOnce_Alberta() {
  for (let n = 0; n < 1; n++) {
    randomItem();
  }
}

function simulate5Times_Alberta() {
  for (let n = 0; n < 5; n++) {
    randomItem();
  }
}

function untilGrandPrize_Alberta() {
  let count = 0;
  while (numGrandPrize_Alberta < 1) {
    randomItem();
    count++;
  }
  console.log('count' + count);
}

function until500Donuts_Alberta() {
  let count = 0;
  while (numFreeDonut_Alberta < 500) {
    randomItem();
    count++;
  }
  console.log('count' + count);
}

//

// Global Variables Saskatchewan
let numPleasePlayAgain_Saskatchewan = 0;
let numFreeCoffee_Saskatchewan = 0;
let numFreeDonut_Saskatchewan = 0;
let numGrandPrize_Saskatchewan = 0;


// Event Listener Saskatchewan
document.getElementById('simulateOnce_Saskatchewan').addEventListener('click', simulateOnce_Saskatchewan);
document.getElementById('simulate5Times_Saskatchewan').addEventListener('click', simulate5Times_Saskatchewan);
document.getElementById('untilGrandPrize_Saskatchewan').addEventListener('click', untilGrandPrize_Saskatchewan);
document.getElementById('until500Donuts_Saskatchewan').addEventListener('click', until500Donuts_Saskatchewan);

// Event Functions
function randomItem() {
  // Generate random number
  let randNum = Math.random();

  // Simulate results
  if (randNum < 0.70) {
    console.log('PleasePlayAgain_Saskatchewan');
    numPleasePlayAgain_Saskatchewan++;
    document.getElementById('PleasePlayAgain_Saskatchewan').innerHTML = numPleasePlayAgain_Saskatchewan;
    document.getElementById('results_Saskatchewan').innerHTML += '<img src="please_play_again.png">';
  } else if (randNum < 0.71) {
    console.log('FreeCoffee_Saskatchewan');
    numFreeCoffee_Saskatchewan++;
    document.getElementById('FreeCoffee_Saskatchewan').innerHTML = numFreeCoffee_Saskatchewan;
    document.getElementById('results_Saskatchewan').innerHTML += '<img src="free_donut.png">';
  } else if (randNum < 0.72) {
    console.log('FreeDonut_Saskatchewan');
    numFreeDonut_Saskatchewan++;
    document.getElementById('FreeDonut_Saskatchewan').innerHTML = numFreeDonut_Saskatchewan;
    document.getElementById('results_Saskatchewan').innerHTML += '<img src="free_donut.png">';
  } else {
    console.log('GrandPrize_Saskatchewan');
    numGrandPrize_Saskatchewan++;
    document.getElementById('GrandPrize_Saskatchewan').innerHTML = numGrandPrize_Saskatchewan;
    document.getElementById('results_Saskatchewan').innerHTML += '<img src="grand_prize.png">';
  }
}

function simulateOnce_Saskatchewan() {
  for (let n = 0; n < 1; n++) {
    randomItem();
  }
}

function simulate5Times_Saskatchewan() {
  for (let n = 0; n < 5; n++) {
    randomItem();
  }
}

function untilGrandPrize_Saskatchewan() {
  let count = 0;
  while (numGrandPrize_Saskatchewan < 1) {
    randomItem();
    count++;
  }
  console.log('count' + count);
}

function until500Donuts_Saskatchewan() {
  let count = 0;
  while (numFreeDonut_Saskatchewan < 500) {
    randomItem();
    count++;
  }
  console.log('count' + count);
}