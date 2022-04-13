/* 
  Array.diff

  Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

  It should remove all values from list a, which are present in list b keeping their order.

  arrayDiff([1,2],[1]) == [2]
  If a value is present in b, all of its occurrences must be removed from the other:

  arrayDiff([1,2,2,2,3],[2]) == [1,3]

  Link: https://www.codewars.com/kata/523f5d21c841566fde000009/train/javascript
*/

function arrayDiff(a, b) {
  const res = a.slice();

  for (let i = 0; i < b.length; i++) {
    for (let j = 0; j < a.length; j++) {
      if (b[i] === a[j]) {
        const index = res.indexOf(b[i]);

        res.splice(index, 1);
      }
    }
  }

  return res;
}

console.log(arrayDiff([1, 2], [1])); // [2]
console.log(arrayDiff([1, 2, 2], [])); // [1, 2, 2]
console.log(arrayDiff([1, 2, 3], [1, 2])); // [3]
