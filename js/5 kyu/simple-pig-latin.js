/* 
  Simple Pig Latin

  Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

  Examples
  pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
  pigIt('Hello world !');     // elloHay orldway !

  Link: https://www.codewars.com/kata/520b9d2ad5c005041100000f/train/javascript
*/

/* 
  Solution #1
  ===========================
*/

function pigIt1(str) {
  return str
    .split(' ')
    .map((w) => {
      const wordArr = w.split('');
      const charIndices = [];

      wordArr.forEach((c, i) => {
        if (/\w/.test(c)) {
          charIndices.push(i);
        }
      });

      if (wordArr.length > 1 && wordArr.length > charIndices.length) {
        wordArr[charIndices.length] = wordArr[0] + 'ay' + wordArr[wordArr.length - 1];
      }

      if (wordArr.length === charIndices.length) {
        wordArr[charIndices.length] = wordArr[0] + 'ay';
      }

      if (wordArr.length > 1) {
        wordArr.shift();
      }

      return wordArr.join('');
    })
    .join(' ');
}

console.log(pigIt1('Pig latin is cool')); // igPay atinlay siay oolcay
console.log(pigIt1('Hello world !')); // elloHay orldway !

/* 
  Solution #2
  ===========================
*/

function pigIt2(str) {
  return str.replace(/\w+/g, (w) => w.slice(1) + w[0] + 'ay');
}

console.log(pigIt2('Pig latin is cool')); // igPay atinlay siay oolcay
console.log(pigIt2('Hello world !')); // elloHay orldway !
