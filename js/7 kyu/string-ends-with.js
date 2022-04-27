/* 
  Complete the solution so that it returns true if the first argument(string) passed 
  in ends with the 2nd argument (also a string).

  Examples:

  solution('abc', 'bc') // returns true
  solution('abc', 'd') // returns false

  Link: https://www.codewars.com/kata/51f2d1cafc9c0f745c00037d/solutions/javascript
*/

const solution = (str, ending) => str.endsWith(ending);

console.log(solution('abcde', 'cde')); // true
console.log(solution('abcde', 'abc')); // false
console.log(solution('', 'abc')); // false
