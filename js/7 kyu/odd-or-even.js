/* 
  Odd or Even?

  Given a list of integers, determine whether the sum of its elements is odd or even.
  Give your answer as a string matching "odd" or "even".
  If the input array is empty consider it as: [0] (array with a zero).

  Examples:
  Input: [0]
  Output: "even"

  Input: [0, 1, 4]
  Output: "odd"

  Input: [0, -1, -5]
  Output: "even"

  Link: https://www.codewars.com/kata/5949481f86420f59480000e7/train/javascript
*/

const oddOrEven = (array) => (array.reduce((prev, cur) => prev + cur, 0) % 2 ? 'odd' : 'even');

console.log(oddOrEven([])); // even
console.log(oddOrEven([0])); // even
console.log(oddOrEven([0, -1, 2])); // odd
console.log(oddOrEven([1023, 1, 2])); // even
