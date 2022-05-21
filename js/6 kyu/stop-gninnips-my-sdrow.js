/* 
  Stop gninnipS My sdroW!

  Write a function that takes in a string of one or more words, and returns the same string, but with all 
  five or more letter words reversed (Just like the name of this Kata). Strings passed in will consist of 
  only letters and spaces. Spaces will be included only when more than one word is present.

  Examples: spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw" spinWords( "This is a test") => 
  returns "This is a test" spinWords( "This is another test" )=> returns "This is rehtona test"

  Link: https://www.codewars.com/kata/5264d2b162488dc400000001/train/javascript
*/

/* 
  Solution #1
  =================================
*/

function spinWords1(string) {
  const arr = string.split(' ');
  const res = arr.map((word) => (word.length >= 5 ? word.split('').reverse().join('') : word));

  return res.join(' ');
}

console.log(spinWords1('Welcome')); // emocleW
console.log(spinWords1('Hey fellow warriors')); // Hey wollef sroirraw
console.log(spinWords1('This is a test')); // This is a test
console.log(spinWords1('This is another test')); // This is rehtona test

/* 
  Solution #2
  =================================
*/

function spinWords2(string) {
  return string.replace(/\w{5,}/g, (word) => word.split('').reverse().join(''));
}

console.log(spinWords2('Welcome')); // emocleW
console.log(spinWords2('Hey fellow warriors')); // Hey wollef sroirraw
console.log(spinWords2('This is a test')); // This is a test
console.log(spinWords2('This is another test')); // This is rehtona test
