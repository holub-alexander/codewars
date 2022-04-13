/* 
  Find the unique string

  There is an array of strings. All strings contains similar letters except one. Try to find it!

  findUniq([ 'Aa', 'aaa', 'aaaaa', 'BbBb', 'Aaaa', 'AaAaAa', 'a' ]) === 'BbBb'
  findUniq([ 'abc', 'acb', 'bac', 'foo', 'bca', 'cab', 'cba' ]) === 'foo'
  Strings may contain spaces. Spaces are not significant, only non-spaces symbols matters. E.g. string that contains only spaces is like empty string.

  It’s guaranteed that array contains more than 3 strings.

  This is the second kata in series:

  Link: https://www.codewars.com/kata/585d8c8a28bc7403ea0000c3/train/javascript
*/

function findUniq(arr) {
  const numberOfRepetitions = {};
  let uniqueElementIndex = 0;

  arr.forEach((a, i) => {
    const key = [...new Set(a.toLowerCase())].sort().join('');

    numberOfRepetitions[key] = {
      name: key,
      count: 0,
    };
  });

  arr.forEach((a, i) => {
    const key = [...new Set(a.toLowerCase())].sort().join('');

    numberOfRepetitions[key].count++;
    numberOfRepetitions[key].index = i;
  });

  Object.values(numberOfRepetitions).forEach((a) => {
    if (a.count === 1 && !/^$/.test(a.name)) {
      uniqueElementIndex = a.index;
    }
  });

  return arr[uniqueElementIndex];
}

console.log(findUniq(['Aa', 'aaa', 'aaaaa', 'BbBb', 'Aaaa', 'AaAaAa', 'a'])); // BbBb
console.log(findUniq(['Tom Marvolo Riddle', 'I am Lord Voldemort', 'Harry Potter'])); // Harry Potter
console.log(findUniq(['    ', 'a', ' '])); // a
