/* 
  Remove anchor from URL

  Complete the function/method so that it returns the url with anything after the anchor (#) removed.

  Examples
  "www.codewars.com#about" --> "www.codewars.com"
  "www.codewars.com?page=1" -->"www.codewars.com?page=1"

  Link: https://www.codewars.com/kata/51f2b4448cadf20ed0000386/train/javascript
*/

function removeUrlAnchor(url) {
  return url.replace(/#.+$/, '');
}

console.log(removeUrlAnchor('www.codewars.com#about')); // www.codewars.com
console.log(removeUrlAnchor('www.codewars.com/katas/?page=1#about')); // www.codewars.com/katas/?page=1
console.log(removeUrlAnchor('www.codewars.com/katas/')); // www.codewars.com/katas/
