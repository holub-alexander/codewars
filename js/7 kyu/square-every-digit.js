/* 
  Square Every Digit

  Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

  For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.

  Note: The function accepts an integer and returns an integer

  Link: https://www.codewars.com/kata/546e2562b03326a88e000020/train/javascript
*/

const squareDigits = (num) =>
  +num
    .toString()
    .split('')
    .map((n) => Math.pow(n, 2))
    .join('');

console.log(squareDigits(3212)); // 9414
console.log(squareDigits(2112)); // 4114
console.log(squareDigits(0)); // 0
