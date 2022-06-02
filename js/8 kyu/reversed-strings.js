/* 
  Reversed Strings

  Complete the solution so that it reverses the string passed into it.

  'world'  =>  'dlrow'
  'word'   =>  'drow'

  Link: https://www.codewars.com/kata/5168bb5dfe9a00b126000018/train/javascript
*/

const solution = (str) => str.split('').reverse().join('');

console.log(solution('world')); // dlrow
console.log(solution('hello')); // olleh
console.log(solution('')); // ''
console.log(solution('h')); // h
