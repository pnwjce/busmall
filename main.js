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
var sampleProdImageMidArrayIndex = 4;
var sampleProdImageRightArrayIndex = 8;
var clickCount = 0;


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

// ProdImage.prototype.renderList = function() {
//   var prodList = document.getElementById('Products');
//   var listItemEl = document.createElement('li');
//   listItemEl.textContent = this.name + ' was liked ' + this.likes + ' times. ';
//   prodList.appendChild(listItemEl);
// };

var list = function() {
  for(var i = 0; i < allProdImages.length; i++) {
    allProdImages[i].renderList();
  }
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
  
  clickCount++;
  //adding local storage
  localStorage.setItem('allLikes', JSON.stringify(allProdImages));
  if (clickCount === 25) {
    imageSection.removeEventListener('click', prodClickHander);
    renderChart();
  }
};

imageSection.addEventListener('click', prodClickHander);


//adding images
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
new ProdImage('./img/pet-sweep.jpg', 'Pet Sweeper Booties');
new ProdImage('./img/scissors.jpg', 'Pizza Scissors');
new ProdImage('./img/shark.jpg', 'Shark Sleeping Bag');
new ProdImage('./img/sweep.png', 'Baby Sweeper Sleeper');
new ProdImage('./img/tauntaun.jpg', 'Tauntaun Sleeping Bag');
new ProdImage('./img/unicorn.jpg', 'Unicorn Meat');
new ProdImage('./img/usb.gif', 'Octopus USB stick');
new ProdImage('./img/water-can.jpg', 'Self-Watering Can');
new ProdImage('./img/wine-glass.jpg', 'Closed Top Wine Glass');

console.log(allProdImages);


//======================================================//

var ctx = document.getElementById('chart').getContext('2d');
console.log(ctx, 'yo');

var renderChart = function() {
  var prodNames = [];
  var prodLikes = [];
  var prodShown = [];
  var colors = [];
  for(var i in allProdImages) {
    prodNames.push(allProdImages[i].name);
    prodLikes.push(allProdImages[i].likes);
    prodShown.push(allProdImages[i].shown);
    colors.push('rgb(175, 23, 10)', 'gb(237, 110, 14)', 'rgb(239, 221, 19)', 'rgb(209, 239, 19)', 'rgb(147, 239, 19)', 'rgb(19, 239, 132)', 'rgb(19, 228, 239)');
  }

  var chartData = {
    labels: prodNames,
    datasets: [{
      label: 'Number of Votes per Product',
      data: prodLikes,
      backgroundColor: colors,
      borderWidth: 1,
    }],
  };
  
  var chartOptions = {
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    },
    animation: {
      duration: 1400,
    },
    responsive: true,
  };

  var barChart = {
    type: 'bar',
    data: chartData,
    options: chartOptions,
  };

  var renderChart = new Chart(ctx, barChart);
};



