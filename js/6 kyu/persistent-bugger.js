/* 
  Persistent Bugger.

  Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.

  For example (Input --> Output):

  39 --> 3 (because 3*9 = 27, 2*7 = 14, 1*4 = 4 and 4 has only one digit)
  999 --> 4 (because 9*9*9 = 729, 7*2*9 = 126, 1*2*6 = 12, and finally 1*2 = 2)
  4 --> 0 (because 4 is already a one-digit number)

  Link: https://www.codewars.com/kata/55bf01e5a717a0d57e0000ec/train/javascript
*/

/* 
  Sulution #1
  ====================================
*/

function persistence1(num, count = 0) {
  let arr = num.toString().split('');

  if (arr.length === 1) {
    return count;
  }

  return persistence1(
    arr.reduce((prev, cur) => prev * cur, 1),
    ++count
  );
}

console.log(persistence1(39)); // 3
console.log(persistence1(4)); // 0
console.log(persistence1(25)); // 2
console.log(persistence1(999)); // 4

/* 
  Sulution #2
  ====================================
*/

function persistence2(num) {
  for (var i = 0; num > 9; i++) {
    num = num
      .toString()
      .split('')
      .reduce((t, c) => c * t);
  }

  return i;
}

console.log(persistence2(39)); // 3
console.log(persistence2(4)); // 0
console.log(persistence2(25)); // 2
console.log(persistence2(999)); // 4
