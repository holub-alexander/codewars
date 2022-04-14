/* 
  Filter unused digits

  Given a varying number of integer arguments, return the digits that are not present in any of them.

  Example:

  [12, 34, 56, 78]  =>  "09"
  [2015, 8, 26]     =>  "3479"
  Note: the digits in the resulting string should be sorted.

  Link: https://www.codewars.com/kata/55de6173a8fbe814ee000061/train/javascript
*/

function unusedDigits(...arr) {
  let res = [];
  const numbers = '1234567890';
  const sortArr = arr
    .join('')
    .split('')
    .sort((a, b) => a - b);

  for (let value of numbers) {
    if (sortArr.indexOf(value) === -1) {
      res.push(value);
    }
  }

  return res.sort((a, b) => a - b).join('');
}
