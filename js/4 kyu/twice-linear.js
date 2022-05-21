/* 
  Twice linear

  Consider a sequence u where u is defined as follows:

  The number u(0) = 1 is the first one in u.
  For each x in u, then y = 2 * x + 1 and z = 3 * x + 1 must be in u too.
  There are no other numbers in u.
  Ex: u = [1, 3, 4, 7, 9, 10, 13, 15, 19, 21, 22, 27, ...]

  1 gives 3 and 4, then 3 gives 7 and 10, 4 gives 9 and 13, then 7 gives 15 and 22 and so on...

  Task:
  Given parameter n the function dbl_linear (or dblLinear...) returns the element u(n) of the 
  ordered (with <) sequence u (so, there are no duplicates).

  Example:
  dbl_linear(10) should return 22

  Note:
  Focus attention on efficiency

  Link: https://www.codewars.com/kata/5672682212c8ecf83e000050/train/javascript
*/

function dblLinear(n) {
  let res = [1];

  for (let i = 0, x = 0, y = 0; i < n; i++) {
    const resX = res[x] * 2 + 1;
    const resY = res[y] * 3 + 1;

    if (resX <= resY) {
      res.push(resX);
      x++;

      if (resX === resY) {
        y++;
      }
    } else {
      res.push(resY);
      y++;
    }
  }

  return res.pop();
}

console.log(dblLinear(10)); // 22
console.log(dblLinear(20)); // 57
console.log(dblLinear(30)); // 91
console.log(dblLinear(50)); // 175
console.log(dblLinear(100)); // 447
