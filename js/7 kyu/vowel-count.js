/* 
  Vowel Count

  Return the number (count) of vowels in the given string.

  We will consider a, e, i, o, u as vowels for this Kata (but not y).

  The input string will only consist of lower case letters and/or spaces.

  Link: https://www.codewars.com/kata/54ff3102c1bad923760001f3/train/javascript
*/

const getCount = (str) => str.match(/[aeiou]/gi)?.length || 0;

console.log(getCount('abracadabra')); // 5
console.log(getCount('my pyx')); // 0
console.log(getCount('o a kak ushakov lil vo kashu kakao')); // 13
