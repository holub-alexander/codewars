/* 
  Beginner - Lost Without a Map

  Given an array of integers, return a new array with each value doubled.

  For example:

  [1, 2, 3] --> [2, 4, 6]

  Link: https://www.codewars.com/kata/57f781872e3d8ca2a000007e/train/javascript
*/

const maps = (x) => x.map((x) => x * 2);

console.log(maps([1, 2, 3])); // [2, 4, 6]
console.log(maps([4, 1, 1, 1, 4])); // [8, 2, 2, 2, 8])
