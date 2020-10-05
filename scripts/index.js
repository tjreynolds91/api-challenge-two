// API urls and key

const baseURL = 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=';
const key = 'y3DUrejxMPFNOGtCKPo36l4yaBgHPoNb8kInsRLw';
const url = baseURL + key;
const secondURL = 'https://api.nasa.gov/planetary/apod?api_key=';
const urlTwo = secondURL + key;

//Links for fetched images
const jumboBack = document.querySelector('.jumbotron-fluid');
const cardLeft = document.querySelector('.cardLeft');
const cardMiddle = document.querySelector('.cardMiddle');
const cardRight = document.querySelector('cardRight');
console.log('cardLeft :', cardLeft);
console.log('cardRight :', cardRight);
console.log('cardMdiddle :', cardMiddle);
console.log('jumbotron-fluid :', jumboBack);



// Fetch Functions
fetch(url)
  .then(function(response) {
        return response.json();
    })
    .then(function(myJson) {
        console.log(myJson)
        
      
})

fetch(urlTwo)
  .then(function(response) {
        return response.json();
    })
    .then(function(myJson) {
        console.log(myJson)
        
      
})

// Display image to jumbtron background from 'const = urlTwo'


// Display image to cardLeft from 'const = url'


// Display image to cardMiddle 'const = url'


// Display image to cardRight  'const = url'