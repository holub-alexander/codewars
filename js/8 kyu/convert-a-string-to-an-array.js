/* 
  Convert a string to an array

  Write a function to split a string and convert it into an array of words.

  Examples (Input -> Output):
  * "Robin Singh" ==> ["Robin", "Singh"]

  * "I love arrays they are my favorite" ==> ["I", "love", "arrays", "they", "are", "my", "favorite"]

  Link: https://www.codewars.com/kata/57e76bc428d6fbc2d500036d/train/javascript
*/

function stringToArray(string) {
  const res = [];
  let subStr = '';

  for (let i = 0; i < string.length; i++) {
    if (string[i] === ' ') {
      res.push(subStr);
      subStr = '';

      continue;
    }

    if (i === string.length - 1) {
      subStr += string[i];
      res.push(subStr);

      continue;
    }

    subStr += string[i];
  }

  return res;
}

function stringToArrayBest(string) {
  return string.split(' ');
}

console.log(stringToArray('Robin Singh')); // ["Robin", "Singh"]
console.log(stringToArray('"I love arrays they are my favorite"')); // ["I", "love", "arrays", "they", "are", "my", "favorite"]
