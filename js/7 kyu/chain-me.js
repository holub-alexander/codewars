/* 
  Chain me

  Write a generic function chainer
  Write a generic function chainer that takes a starting value, and an array of functions to execute on it (array of symbols for ruby).

  The input for each function is the output of the previous function (except the first function, which takes the starting value as it's input). Return the final value after execution is complete.

  function add(num) {
    return num + 1
  }

  function mult(num) {
    return num * 30
  }

  chain(2, [add, mult]); // 90

  Link: https://www.codewars.com/kata/54fb853b2c8785dd5e000957/train/javascript
*/

const chain = (input, fns) => fns.reduce((value, fn) => fn(value), input);

const add = (x) => {
  return x + 10;
};

const mult = (x) => {
  return x * 30;
};

console.log(chain(2, [add, mult])); // 360
console.log(chain(0, [add, mult])); // 300
console.log(chain(-5, [add, mult])); // 150
