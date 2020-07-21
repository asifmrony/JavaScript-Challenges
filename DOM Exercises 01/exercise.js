/* JavaScript DOM Exercises 01 Tutorial: https://youtu.be/EHF7xBUAmrQ */

/*
  Exercise 01
  -----------
  Highlight all of the words over 8 characters long in the paragraph text (with a yellow background for example)
*/

var paragraph = document.querySelector('p');

paragraph.innerHTML = paragraph.innerText
    .split(' ')
    .map(item => item.length > 8 ? `<span style="background-color: yellow">${item}</span>`: item)
    .join(' ');
/*
  Exercise 02
  -----------
  Add a link back to the source of the text after the paragraph tag.
  (https://forcemipsum.com/)
*/
var bodyElement = document.getElementsByTagName('body');

var anchorElement = document.createElement('a');
anchorElement.href = 'https://forcemipsum.com/';
anchorElement.innerText = 'Generated text from Forcem Ipsum';

bodyElement[0].appendChild(anchorElement);
/*
  Exercise 03
  -----------
  Split each new sentence on to a separate line in the paragraph text.
  A sentence can be assumed to be a string of text terminated with a period (.)
*/

paragraph.innerHTML = paragraph.innerHTML.split(".").join("</p><p>");

/* 
  Exercise 04
  -----------
  Count the number of words in the paragraph tag and display the count afer the heading.
  You can assume that all words are separated by one singular whitespace.
*/

console.log(paragraph);
var words = paragraph.innerText.split(" ").length;

var newParagraph = document.createElement('h3');  
newParagraph.innerText = `Total Words Count in the paragraph is ${words}`;

document.body.insertBefore(newParagraph, paragraph);
/*
  Exercise 05
  -----------
  Replace all question marks (?) with thinking faces (🤔) and exclamation marks (!) with astonished faces (😲) 
*/

Array.from(document.querySelectorAll('p'))
    .forEach(p => {
    p.innerHTML = p.innerHTML.replace(/\?/g, ' 🤔').replace(/\!/g, ' 😲');
})