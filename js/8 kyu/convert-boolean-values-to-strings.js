/* 
  Convert boolean values to strings 'Yes' or 'No'.

  Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.

  Link: https://www.codewars.com/kata/53369039d7ab3ac506000467/train/javascript
*/

const boolToWord = (bool) => (bool ? 'Yes' : 'No');

console.log(boolToWord(true)); // Yes
console.log(boolToWord(false)); // No
