/* 
  Multiples of 3 or 5

  If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. 
  The sum of these multiples is 23.

  Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in. 
  Additionally, if the number is negative, return 0 (for languages that do have them).

  Note: If the number is a multiple of both 3 and 5, only count it once.

  Link: https://www.codewars.com/kata/514b92a657cdc65150000006/train/javascript
*/

function solution(number) {
  return new Array(number > 0 ? number : 0)
    .fill(null)
    .map((_, i) => i)
    .reduce((prev, cur) => {
      return cur % 3 === 0 || cur % 5 === 0 ? prev + cur : prev;
    }, 0);
}

console.log(solution(10)); // 23
console.log(solution(-1)); // 0
console.log(solution(0)); // 0
