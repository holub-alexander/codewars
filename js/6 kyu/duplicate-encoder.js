/* 
  Duplicate Encoder

  The goal of this exercise is to convert a string to a new string where each character in 
  the new string is "(" if that character appears only once in the original string, or ")" if 
  that character appears more than once in the original string. Ignore capitalization when determining 
  if a character is a duplicate.

  Examples
  "din"      =>  "((("
  "recede"   =>  "()()()"
  "Success"  =>  ")())())"
  "(( @"     =>  "))((" 
  Notes
  Assertion messages may be unclear about what they display in some languages. If you read "...It Should encode 
  XXX", the "XXX" is the expected result, not the input!

  Link: https://www.codewars.com/kata/54b42f9314d9229fd6000d9c/train/javascript
*/

const duplicateEncode1 = (word) => {
  return word
    .toLowerCase()
    .split('')
    .map((x) => ([...word].filter((y) => x === y).length > 1 ? ')' : '('))
    .join('');
};

console.log(duplicateEncode1('din')); // (((
console.log(duplicateEncode1('recede')); // ()()()
console.log(duplicateEncode1('Success')); // )())())
console.log(duplicateEncode1('(( @')); // ))((

const duplicateEncode2 = (word) => {
  const lowercaseStr = word.toLowerCase();
  let res = '';

  start: for (let i = 0; i < lowercaseStr.length; i++) {
    for (let j = 0; j < lowercaseStr.length; j++) {
      if (lowercaseStr[i] === lowercaseStr[j] && i !== j) {
        res += ')';

        continue start;
      }
    }

    res += '(';
  }

  return res;
};

console.log(duplicateEncode2('din')); // (((
console.log(duplicateEncode2('recede')); // ()()()
console.log(duplicateEncode2('Success')); // )())())
console.log(duplicateEncode2('(( @')); // ))((
