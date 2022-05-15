/* 
  Convert string to camel case

  Complete the method/function so that it converts dash/underscore delimited words into camel casing. 
  The first word within the output should be capitalized only if the original word was capitalized 
  (known as Upper Camel Case, also often referred to as Pascal case).

  Examples
  "the-stealth-warrior" gets converted to "theStealthWarrior"
  "The_Stealth_Warrior" gets converted to "TheStealthWarrior"

  Link: https://www.codewars.com/kata/517abf86da9663f1d2000003/train/javascript
*/

/* 
  Solution #1
  =================================
*/

function toCamelCase1(str) {
  const separator = str.match(/[-_\s]/);
  let res = '';

  const arr = str.split((separator && separator[0]) || '');

  arr.forEach((w, i) => {
    if (i === 0) {
      res += w;
    } else {
      res += w[0].toUpperCase() + w.slice(1);
    }
  });

  return res;
}

console.log(toCamelCase1('')); //  ''
console.log(toCamelCase1('the_stealth_warrior')); // theStealthWarrior"
console.log(toCamelCase1('The-Stealth-Warrior')); // TheStealthWarrior
console.log(toCamelCase1('A-B-C')); // ABC

/* 
  Solution #2
  =================================
*/

const toCamelCase2 = (str) => str.replace(/[-_]\w/gi, (match) => match.charAt(1).toUpperCase());

console.log(toCamelCase2('')); //  ''
console.log(toCamelCase2('the_stealth_warrior')); // theStealthWarrior"
console.log(toCamelCase2('The-Stealth-Warrior')); // TheStealthWarrior
console.log(toCamelCase2('A-B-C')); // ABC
