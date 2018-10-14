'use strict';

//Global variables
var sampleProdImageLeft = document.getElementById('left');
var sampleProdImageMid = document.getElementById('middle');
var sampleProdImageRight = document.getElementById('right');
var imageSection = document.getElementById('click-here');

var sampleProdImageLeftArrayIndex = 0;

//Images array
var allProdImages = [];

//Constructor function
var ProdImage = function(src, name, size) {
  this.src = src;
  this.name = name;
  this.likes = 0;
  this.shown = 0;
  this.size = size;
  if(!size){
    this.size = '300px';
  }
  allProdImages.push(this);
};

//prototypes
ProdImage.prototype.renderProd = function() {
  sampleProdImageLeft.src = this.src;
};

//event listeners
var prodClickHander = function()

// var busMallContainer = document.getElementById('busmall-container');

// var ctx = document.getElementById('myChart').getContext('2d');

// var chartData = {
//   label:
//   datasets:

// };

// var chartOptions = 

// var barChart = 

