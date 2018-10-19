'use strict';

//Global variables
var sampleProdImageLeft = document.getElementById('left');
var sampleProdImageMid = document.getElementById('middle');
var sampleProdImageRight = document.getElementById('right');
var imageSection = document.getElementById('click-here');
var sampleProdLeftText = document.getElementById('prod-text-left');
var sampleProdMidText = document.getElementById('prod-text-middle');
var sampleProdRightText = document.getElementById('prod-text-right');
var sampleProdImageLeftArrayIndex = 0;
var sampleProdImageMidArrayIndex = 0;
var sampleProdImageRightArrayIndex = 0;


//Images array
var allProdImages = [];

//Constructor function
var ProdImage = function(src, name) {
  this.src = src;
  this.name = name;
  this.likes = 0;
  this.shown = 0;
  allProdImages.push(this);
};

//prototypes
ProdImage.prototype.renderProd = function() {
  sampleProdImageLeft.src = this.src;
};

//event listeners
var prodClickHander = function(event) {
  do {
    var randomNumber = Math.floor(Math.random() * allProdImages.length);
  } while(randomNumber === sampleProdImageLeftArrayIndex || randomNumber === sampleProdImageMidArrayIndex || randomNumber === sampleProdImageRightArrayIndex);
  do {
    var randomNumber2 = Math.floor(Math.random() * allProdImages.length);
  } while(randomNumber2 === sampleProdImageLeftArrayIndex || randomNumber2 === sampleProdImageMidArrayIndex || randomNumber2 === sampleProdImageRightArrayIndex || randomNumber2 === randomNumber);
  do {
    var randomNumber3 = Math.floor(Math.random() * allProdImages.length);
  } while(randomNumber3 === sampleProdImageLeftArrayIndex || randomNumber3 === sampleProdImageRightArrayIndex || randomNumber3 === sampleProdImageRightArrayIndex || randomNumber3 === randomNumber2 || randomNumber3 === randomNumber);

  //tracking likes and shown
  if(event.target.id === 'left') {
    allProdImages[sampleProdImageLeftArrayIndex].likes++;
    console.log('left was clicked');
  } else if (event.target.id === 'middle') {
    allProdImages[sampleProdImageMidArrayIndex].likes++;
    console.log('middle was clicked');
  } else {
    allProdImages[sampleProdImageRightArrayIndex].likes++;
    console.log('right was clicked');
  }
  
  allProdImages[sampleProdImageLeftArrayIndex].shown++;
  allProdImages[sampleProdImageMidArrayIndex].shown++;
  allProdImages[sampleProdImageRightArrayIndex].shown++;

  sampleProdImageLeftArrayIndex = randomNumber;
  sampleProdImageMidArrayIndex = randomNumber2;
  sampleProdImageRightArrayIndex = randomNumber3;

  //event.target.src = allProdImages[randomNumber].src;
  sampleProdImageLeft.src = allProdImages[randomNumber].src;
  sampleProdImageMid.src = allProdImages[randomNumber2].src;
  sampleProdImageRight.src = allProdImages[randomNumber3].src;
  sampleProdLeftText.textContent = allProdImages[randomNumber].name;
  sampleProdMidText.textContent = allProdImages[randomNumber2].name;
  sampleProdRightText.textContent = allProdImages[randomNumber3].name;

};

imageSection.addEventListener('click', prodClickHander);

new ProdImage('./img/bag.jpg', 'R2D2 Roller Bag');
new ProdImage('./img/banana.jpg', 'Banana Slicer');
new ProdImage('./img/bathroom.jpg', 'Tablet Toilet paper holder');
new ProdImage('./img/boots.jpg', 'Toeless Rainboots');
new ProdImage('./img/breakfast.jpg', 'Toast oven/Coffee Maker');
new ProdImage('./img/bubblegum.jpg', 'Meatball Bubblegum');
new ProdImage('./img/chair.jpg', 'Red Chair');
new ProdImage('./img/cthulhu.jpg', 'Cthulhu Action Figure');
new ProdImage('./img/dog-duck.jpg', 'Doggie Duck Mask');
new ProdImage('./img/dragon.jpg', 'Dragon Meat');
new ProdImage('./img/pen.jpg', 'Pen Cap Utensils');
new ProdImage('./img/pet-sweep', 'Pen Sweeper Booties');
new ProdImage('./img/scissors.jpg', 'Pizza Scissors');
new ProdImage('./img/shark.jpg', 'Shark Sleeping Bag');
new ProdImage('./img/sweep.png', 'Baby Sweeper Sleeper');
new ProdImage('./img/tautaun.jpg', 'Tauntaun Sleeping Bag');
new ProdImage('./img/unicorn.jpg', 'Unicorn Meat');
new ProdImage('./img/usb.gif', 'Octopus USB stick');
new ProdImage('./img/water-can.jpg', 'Self-Watering Can');
new ProdImage('./img/wine-glass', 'Closed Top Wine Glass');


console.log(allProdImages);

