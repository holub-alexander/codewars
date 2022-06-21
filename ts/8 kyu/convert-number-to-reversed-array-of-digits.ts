/* 
  Convert number to reversed array of digits

  Convert number to reversed array of digits
  Given a random non-negative number, you have to return the digits of this \
  number within an array in reverse order.

  Example(Input => Output):
  348597 => [7,9,5,8,4,3]
  0 => [0]

  Link: https://www.codewars.com/kata/5583090cbe83f4fd8c000051/train/typescript
*/

export const digitize = (n: number): number[] => {
  return n
    .toString()
    .split('')
    .reverse()
    .map((e) => +e);
};

console.log(digitize(35231)); // [1,3,2,5,3]
console.log(digitize(0)); // [0]
