/*** 
 * `quotes` array 
***/
const quotes = [
  {
    quote: "Oh yes, the past can hurt. But from the way I see it, you can either run from it, or… learn from it.",
    source: "Rafiki",
    voice: 'Robert Guillaume',
    citation: "The Lion King",
    year: "1994",
    image: './images/rafiki.png'
  },
  {
    quote: "Nobody is gonna hit as hard as life, but it ain’t how hard you can hit. It’s how hard you can get hit and keep moving forward. It’s how much you can take, and keep moving forward. That’s how winning is done.",
    source: "Rocky Balboa",
    actor: "Sylvester Stalone",
    citation: "Rocky Balboa",
    year: "2006",
    image: './images/rocky.png'
  },
  {
    quote: "Why do we fall sir? So that we can learn to pick ourselves up.",
    source: "Alfred Pennyworth",
    actor: "Michael Caine",
    citation: "Batman Begins",
    year: "2005",
    image: './images/batman.png'
  },
  {
    quote: "All we have to decide is what to do with the time that is given to us.",
    source: "Gandalf the Grey",
    actor: "Sir Ian McKellen",
    citation: "The Lord of the Rings: The Fellowship of the Ring",
    year: "2001",
    image: './images/gandalf.png'
  },
  {
    quote: "No. Try not. Do… or do not. There is no try.",
    source: "Yoda",
    voice: "Frank Oz",
    citation: "Star Wars Episode V: The Empire Strikes Back",
    year: "1980",
    image: './images/yoda.png'
  }
];


/***
 * `getRandomQuote` function
 * select a random quote from the quotes array and return it
***/
const getRandomQuote = () => quotes[Math.floor(Math.random() * quotes.length)];


/***
 * `printQuote` function
 * save the random quote object in a variable and create the HTML based on this object
***/
const printQuote = () => {
  const quote = getRandomQuote();
  const html = `
    <p class="quote">${quote.quote}</p>
    <p class="source">${quote.source} ${quote.citation ? '<span class="citation">' + quote.citation + '</span>' : ''}${quote.year ? '<span class="year">' + quote.year + '</span>' : ''}</p>
    <p class="actor">${quote.actor ? 'Played by: ' + quote.actor : ""}${quote.voice ? 'Voiced by: ' + quote.voice : ""}</p>
  `;
  document.querySelector('#quote-box').innerHTML = html;
  // Give the body a new background color set to a random rbg value
  document.body.style.background = `url(${quote.image}) bottom right no-repeat`;
  document.body.style.backgroundColor = `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`;
};
printQuote();
// call the printQuote function every 5 seconds
setInterval(printQuote, 5000);


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);