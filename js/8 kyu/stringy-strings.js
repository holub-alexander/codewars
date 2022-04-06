/* 
  Stringy Strings

  write me a function stringy that takes a size and returns a string of alternating '1s' and '0s'.

  the string should start with a 1.

  a string with size 6 should return :'101010'.

  with size 4 should return : '1010'.

  with size 12 should return : '101010101010'.

  The size will always be positive and will only use whole numbers.

  Link: https://www.codewars.com/kata/563b74ddd19a3ad462000054/train/javascript
*/

const stringy = (size) =>
  new Array(size)
    .fill(null)
    .map((_, i) => (i % 2 ? 0 : 1))
    .join('');

console.log(stringy(1)); // 1
console.log(stringy(4)); // 1010
console.log(stringy(5)); // 10101
