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
  do {
    var randomNumber = Math.floor(Math.random() * allProdImages.length);
  } while(randomNumber === sampleProdImageLeftArrayIndex);

  allProdImages[sampleProdImageLeftArrayIndex].likes++;
  allProdImages[sampleProdImageLeftArrayIndex].shown++;

  sampleProdImageLeftArrayIndex = randomNumber;
  eventObject.target.src = allProdImages[randomNumber].src;
};

sampleProdImageLeft.addEventListener('click', prodClickHander);

//new ProdImage()



// var busMallContainer = document.getElementById('busmall-container');

// var ctx = document.getElementById('myChart').getContext('2d');

// var chartData = {
//   label:
//   datasets:

// };

// var chartOptions = 

// var barChart = 

