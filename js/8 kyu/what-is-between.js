/* 
  What is between?

  Complete the function that takes two integers (a, b, where a < b) and return an array of all integers between the input parameters, including them.

  For example:

  a = 1
  b = 4
  --> [1, 2, 3, 4]

  Link: https://www.codewars.com/kata/55ecd718f46fba02e5000029/train/javascript
*/

/* 
  Solution #1
  ================================================================
*/

const between1 = (a, b) => {
  const res = [];

  for (let i = a; i <= b; i++) res.push(i);

  return res;
};

console.log(between1(1, 4)); //  [1, 2, 3, 4]
console.log(between1(-2, 2)); // [-2, -1, 0, 1, 2]

/* 
  Solution #2
  ================================================================
*/

const between2 = (a, b) => Array.from(new Array(b - a + 1), (_, i) => a + i);

console.log(between2(1, 4)); //  [1, 2, 3, 4]
console.log(between2(-2, 2)); // [-2, -1, 0, 1, 2]
