// API urls and key

const baseURL = 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=';
const key = 'y3DUrejxMPFNOGtCKPo36l4yaBgHPoNb8kInsRLw';
const url = baseURL + key;
const secondURL = 'https://api.nasa.gov/planetary/apod?api_key=';

//Links for fetched images
const jumboBack = document.querySelector('.jumbotron-fluid');
const cardLeft = document.querySelector('.cardLeft');
const cardMiddle = document.querySelector('.cardMiddle');
const cardRight = document.querySelector('.cardRight');
console.log('cardLeft :', cardLeft);
console.log('cardRight :', cardRight);
console.log('cardMdiddle :', cardMiddle);
console.log('jumbotron-fluid :', jumboBack);
const button = document.querySelector('.randomizer');
console.log('randomizer :', button);

button.addEventListener('click', randomizer);



// Fetch Functions from url for left and middle cards
fetch(url)
  .then(function(response) {
        return response.json();
    })
    .then(function(myJson) {
        console.log(myJson)
        cardLeft.src=myJson.photos[599].img_src;   // Display image to cardLeft from 'const = url'
        cardMiddle.src=myJson.photos[200].img_src;  // Display image to cardMiddle from 'const = url'

      
});


// Function declaring the random year number to urlTwo api.
function randomizer(){
  
  // const urlTwo = secondURL + key + '&date='+ date;

  function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  getRandomIntInclusive(1,30);
  let date = getRandomIntInclusive(1,30);
  const urlTwo = secondURL + key + '&date=2020' + '-9-' + date;



    
       



  

    // Fetch Functions from urlTwo for right card to randomize each click of the button.
  fetch(urlTwo)
    .then(function(response) {
          return response.json();
      })
      .then(function(myJson) {
          console.log(myJson);
          console.log(myJson.hdurl);
          if(myJson.hdurl) {
            cardRight.src=myJson.hdurl    // Display image to cardRight  from 'const = urlTwo'
          }
          else {
            return randomizer();
          }

          
          // else()

          
        
  })
};
randomizer(); // calls the randomizer function to be ablt to randomize the picture pulled from api by date.

