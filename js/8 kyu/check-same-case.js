/* 
  Check same case

  Write a function that will check if two given characters are the same case.

  If either of the characters is not a letter, return -1
  If both characters are the same case, return 1
  If both characters are letters, but not the same case, return 0
  Examples
  'a' and 'g' returns 1

  'A' and 'C' returns 1

  'b' and 'G' returns 0

  'B' and 'g' returns 0

  '0' and '?' returns -1

  Link: https://www.codewars.com/kata/5dd462a573ee6d0014ce715b/train/javascript
*/

function sameCase(a, b) {
  const str = `${a}${b}`;

  if (/[A-Z]{2}/g.test(str) || /[a-z]{2}/g.test(str)) {
    return 1;
  }

  if (/[a-zA-Z]{2}/.test(str)) {
    return 0;
  }

  return -1;
}

console.log(sameCase('C', 'B')); // 1
console.log(sameCase('b', 'Z')); // 0
console.log(sameCase('\t', 'Z')); // -1
