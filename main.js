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
var prodClickHander = function(eventObject) {
  console.log('in the click handler');
  do {
    console.log('all product length' + allProdImages.length);
    var randomNumber = Math.floor(Math.random() * allProdImages.length);
  } while(randomNumber === sampleProdImageLeftArrayIndex || randomNumber === sampleProdImageMidArrayIndex || randomNumber === sampleProdImageRightArrayIndex);
  console.log(randomNumber);

  allProdImages[sampleProdImageLeftArrayIndex].likes++;
  allProdImages[sampleProdImageLeftArrayIndex].shown++;

  allProdImages[sampleProdImageMidArrayIndex].likes++;
  allProdImages[sampleProdImageMidArrayIndex].shown++;

  allProdImages[sampleProdImageRightArrayIndex].likes++;
  allProdImages[sampleProdImageRightArrayIndex].shown++;


  sampleProdImageLeftArrayIndex = randomNumber;
  eventObject.target.src = allProdImages[randomNumber].src;

};

imageSection.addEventListener('click', prodClickHander);

new ProdImage('./img/bag.jpg', 'R2D2 Roller Bag');
new ProdImage('./img/banana.jpg', 'Banana Slicer');
new ProdImage('./img/bathroom.jpg', 'Tablet Toilet paper holder');
new ProdImage('./img/boots.jpg', 'Toeless Rainboots');
new ProdImage('./img/breakfast.jpg', 'Toast oven/Coffee Maker');

console.log(allProdImages);



// var busMallContainer = document.getElementById('busmall-container');

// var ctx = document.getElementById('myChart').getContext('2d');

// var chartData = {
//   label:
//   datasets:

// };

// var chartOptions = 

// var barChart = 

