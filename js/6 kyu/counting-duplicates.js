/* 
  Count the number of Duplicates
  Write a function that will return the count of distinct case-insensitive alphabetic 
  characters and numeric digits that occur more than once in the input string. The input string 
  can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

  Example
  "abcde" -> 0 # no characters repeats more than once
  "aabbcde" -> 2 # 'a' and 'b'
  "aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
  "indivisibility" -> 1 # 'i' occurs six times
  "Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
  "aA11" -> 2 # 'a' and '1'
  "ABBA" -> 2 # 'A' and 'B' each occur twice

  Link: https://www.codewars.com/kata/54bf1c2cd5b56cc47f0007a1/train/javascript
*/

const duplicateCount1 = (text) => {
  const arr = text.toLowerCase().split('');
  const duplicates = {};

  arr.forEach((value) => {
    if (duplicates[value]) {
      duplicates[value] = ++duplicates[value];
    }

    if (!duplicates[value]) {
      duplicates[value] = 1;
    }
  });

  return Object.values(duplicates).filter((count) => count > 1).length;
};

const duplicateCount2 = (text) => {
  return text
    .toLowerCase()
    .split('')
    .filter((value, i, arr) => {
      return arr.indexOf(value) !== i && arr.lastIndexOf(value) === i;
    }).length;
};

console.log(duplicateCount1('abcde')); // 0
console.log(duplicateCount1('aabbcde')); // 2
console.log(duplicateCount1('aabBcde')); // 2

console.log(duplicateCount2('abcde')); // 0
console.log(duplicateCount2('aabbcde')); // 2
console.log(duplicateCount2('aabBcde')); // 2
