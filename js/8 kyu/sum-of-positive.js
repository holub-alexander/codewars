/* 
  Sum of positive

  You get an array of numbers, return the sum of all of the positives ones.

  Example [1,-4,7,12] => 1 + 7 + 12 = 20

  Note: if there is nothing to sum, the sum is default to 0.

  Link: https://www.codewars.com/kata/5715eaedb436cf5606000381/train/javascript
*/

const positiveSum = (arr) => arr.reduce((prev, cur) => (cur > 0 ? prev + cur : prev), 0);

console.log(positiveSum([1, 2, 3, 4, 5])); // 15
console.log(positiveSum([1, -2, 3, 4, 5])); // 13
console.log(positiveSum([])); // 0
