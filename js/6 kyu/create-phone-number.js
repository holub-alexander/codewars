/* 
  Create Phone Number

  Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in 
  the form of a phone number.

  Example
  createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"
  The returned format must be correct in order to complete this challenge.
  Don't forget the space after the closing parentheses!

  Link: https://www.codewars.com/kata/525f50e3b73515a6db000b83/train/javascript
*/

const createPhoneNumber1 = (numbers) => {
  const str = numbers.join('');

  return `(${str.slice(0, 3)}) ${str.slice(3, 6)}-${str.slice(6)}`;
};

console.log(createPhoneNumber1([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])); // (123) 456-7890
console.log(createPhoneNumber1([1, 1, 1, 1, 1, 1, 1, 1, 1, 1])); // (111) 111-1111
console.log(createPhoneNumber1([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])); // (123) 456-7890

const createPhoneNumber2 = (numbers) => {
  let mask = '(xxx) xxx-xxxx';

  for (let i = 0; i < numbers.length; i++) {
    mask = mask.replace('x', numbers[i]);
  }

  return mask;
};

console.log(createPhoneNumber2([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])); // (123) 456-7890
console.log(createPhoneNumber2([1, 1, 1, 1, 1, 1, 1, 1, 1, 1])); // (111) 111-1111
console.log(createPhoneNumber2([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])); // (123) 456-7890
