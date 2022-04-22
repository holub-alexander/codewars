/* 
  Change it up

  Create a function that takes a string as a parameter and does the following, in this order:

  Replaces every letter with the letter following it in the alphabet (see note below)
  Makes any vowels capital
  Makes any consonants lower case
  Note:

  the alphabet should wrap around, so Z becomes A
  in this kata, y isn't considered as a vowel.
  So, for example the string "Cat30" would return "dbU30" (Cat30 --> Dbu30 --> dbU30)

  Link: https://www.codewars.com/kata/58039f8efca342e4f0000023/train/javascript
*/

function changer1(str) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  let res = '';

  for (let i = 0; i < str.length; i++) {
    const currentChar = str[i].toLowerCase();
    const charIndex = alphabet.indexOf(currentChar);
    let newChar = '';

    if (charIndex === -1) {
      res += currentChar;

      continue;
    }

    if (charIndex === alphabet.length - 1) {
      newChar = alphabet[0];
    }

    if (charIndex < alphabet.length - 1 && charIndex !== alphabet.length - 1) {
      newChar = alphabet[charIndex + 1];
    }

    if (newChar.match(/[aeiou]/)) {
      res += newChar.toUpperCase();
    } else {
      res += newChar.toLowerCase();
    }
  }

  return res;
}

const changer2 = (str) =>
  str
    .toLowerCase()
    .replace(/[a-z]/gi, () => {})
    .replace(/[a-z]/g, (m) => String.fromCharCode(((m.charCodeAt(0) - 96) % 26) + 97))
    .replace(/[aeiou]/g, (m) => m.toUpperCase());

console.log(changer('Cat30')); // dbU30
console.log(changer('dogs')); // 'Epht'
console.log(changer('z')); // 'A'
