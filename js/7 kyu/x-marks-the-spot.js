/* 
  'x' marks the spot.

  #'x' marks the spot

  ##Task:

  Given a two dimensional array, return the co-ordinates of 'x'.

  If 'x' is not inside the array, or if 'x' appears multiple times, return []

  The co-ordinates should be zero indexed.

  You should assume you will always get an array as input. The array will only contain 'x's and 'o's.

  Link: https://www.codewars.com/kata/5777fe3f355edbf0a5000d11/train/javascript
*/

const xMarksTheSpot = (input) => {
  const foundIndex = [];

  for (let i = 0; i < input.length; i++) {
    for (let j = 0; j < input[i].length; j++) {
      if (input[i][j] === 'x') {
        foundIndex.push(i, j);
      }
    }
  }

  return foundIndex.length > 2 ? [] : foundIndex;
};

console.log(
  xMarksTheSpot([
    ['o', 'o'],
    ['o', 'o'],
  ])
); // []
console.log(
  xMarksTheSpot([
    ['x', 'o'],
    ['o', 'x'],
  ])
); // []
console.log(
  xMarksTheSpot([
    ['x', 'o'],
    ['o', 'o'],
  ])
); // [0, 0]
