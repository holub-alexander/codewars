/* 
  Zero And One

  You have a string that consists of zeroes and ones. Now choose any two adjacent positions 
  in the string: if one of them is 0, and the other one is 1, remove these two digits from the string.

  Return the length of the resulting (smallest) string that you can get after applying this operation 
  multiple times?

  Note: after each operation, the remaining digits are separated by spaces and thus not adjacent anymore - 
  see the examples below.

  Examples
  For "01010" the result should be 1:

  "01010"  -->  "  010"  -->  "    0"
  For "110100" the result should be 2:

  "110100"  -->  "1  100"  -->  "1    0"
  Input/Output
  [input] string s

  Link: https://www.codewars.com/kata/58ad09d6154165a1c80000d1/train/javascript
*/

function zeroAndOne(s) {
  return s.replace(/10|01/g, ' ').match(/\d/g)?.length || 0;
}

console.log(zeroAndOne('01010')); // 1
console.log(zeroAndOne('11101111')); // 6
console.log(zeroAndOne('01')); // 0
console.log(zeroAndOne('10')); // 0
console.log(zeroAndOne('110110')); // 2
console.log(zeroAndOne('110100')); // 2
