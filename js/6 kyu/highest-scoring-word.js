/* 
  Highest Scoring Word

  Given a string of words, you need to find the highest scoring word.
  Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.
  You need to return the highest scoring word as a string.
  If two words score the same, return the word that appears earliest in the original string.
  All letters will be lowercase and all inputs will be valid.

  Link: https://www.codewars.com/kata/57eb8fcdf670e99d9b000272/train/javascript
*/

function high(words) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';

  const score = (word) => word.split('').reduce((prev, cur) => prev + alphabet.indexOf(cur), 0);

  return words
    .split(' ')
    .map((word, i) => ({ word, pos: i, score: score(word) }))
    .sort((a, b) => a.score - b.score || b.pos - a.pos)
    .pop().word;
}

console.log(high('man i need a taxi up to ubud')); // taxi
console.log(high('what time are we climbing up the volcano')); // volcano
console.log(high('take me to semynak')); // semynak
console.log(high('aa b')); // aa
