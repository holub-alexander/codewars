/* 
  Split Strings

  Complete the solution so that it splits the string into pairs of two characters.
  If the string contains an odd number of characters then it should replace the missing 
  second character of the final pair with an underscore ('_').

  Examples:

  * 'abc' =>  ['ab', 'c_']
  * 'abcdef' => ['ab', 'cd', 'ef']

  Link: https://www.codewars.com/kata/515de9ae9dcfc28eb6000001/train/javascript
*/

/* === Solution #1 === */

const splitStrings1 = (str) => {
  const matches = str.match(/\w{1,2}/g) || [];

  return matches.map((val) => (val.length === 2 ? val : `${val}_`));
};

console.log(splitStrings1('abcdef')); // ["ab", "cd", "ef"]
console.log(splitStrings1('abcdefg')); // ["ab", "cd", "ef", "g_"]
console.log(splitStrings1('')); // []

/* === Solution #2 === */

const splitStrings2 = (str) => {
  return `${str}_`.match(/\w{2}/g) || [];
};

console.log(splitStrings2('abcdef')); // ["ab", "cd", "ef"]
console.log(splitStrings2('abcdefg')); // ["ab", "cd", "ef", "g_"]
console.log(splitStrings2('')); // []
