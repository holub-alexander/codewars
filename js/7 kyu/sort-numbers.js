/* 
  Sort Numbers

  Finish the solution so that it sorts the passed in array of numbers. If the function passes in an empty array or null/nil value then it should return an empty array.

  For example:

  solution([1, 2, 10, 50, 5]); // should return [1,2,5,10,50]
  solution(null); // should return []

  Link: https://www.codewars.com/kata/5174a4c0f2769dd8b1000003/train/javascript
*/

const solution = (nums) => (!nums ? [] : nums.sort((a, b) => a - b));

console.log(solution([2, 5, 3, 4])); // [2, 3, 4, 5]
console.log(solution(null)); // []
