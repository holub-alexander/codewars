/* 
  Find the odd int

  Given an array of integers, find the one that appears an odd number of times.

  There will always be only one integer that appears an odd number of times.

  Examples
  [7] should return 7, because it occurs 1 time (which is odd).
  [0] should return 0, because it occurs 1 time (which is odd).
  [1,1,2] should return 2, because it occurs 1 time (which is odd).
  [0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
  [1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).

  Link: https://www.codewars.com/kata/54da5a58ea159efa38000836/train/javascript
*/

const findOdd1 = (A) => {
  let findOddElem = 0;

  for (let i = 0; i < A.length; i++) {
    const findElem = A.filter((e) => e === A[i]);

    if (findElem.length % 2 !== 0) {
      findOddElem = findElem[0];
      break;
    }
  }

  return findOddElem;
};

console.log(findOdd1([1, 1, 1, 1, 1, 2])); // 2
console.log(findOdd1([1, 1, 1, 1, 1, 1, 2, 2, 3, 4, 4, 4, 5])); // 2
console.log(findOdd1([10])); // 10

const findOdd2 = (arr) => arr.find((item) => arr.filter((elem) => elem === item).length % 2);

console.log(findOdd2([1, 1, 1, 1, 1, 2])); // 2
console.log(findOdd2([1, 1, 1, 1, 1, 1, 2, 2, 3, 4, 4, 4, 5])); // 2
console.log(findOdd2([10])); // 10
