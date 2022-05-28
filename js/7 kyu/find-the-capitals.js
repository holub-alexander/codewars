/* 
  Find the capitals

  Instructions
  Write a function that takes a single string (word) as argument. The function must 
  return an ordered list containing the indexes of all capital letters in the string.

  Example
  Test.assertSimilar( capitals('CodEWaRs'), [0,3,4,6] );

  Link: https://www.codewars.com/kata/539ee3b6757843632d00026b/train/javascript
*/

const capitals = (word) => {
  return word
    .split('')
    .map((val, i) => (/[A-Z]/.test(val) ? i : -1))
    .filter((val) => val !== -1);
};

console.log(capitals('CodEWaRs')); // [0, 3, 4, 6]
console.log(capitals('HeLLo')); // [0, 2, 3]
console.log(capitals('')); // []
