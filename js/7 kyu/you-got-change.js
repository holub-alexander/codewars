/* 
  You Got Change?

  Create a function that will take any amount of money and break it down to the smallest number of bills as possible. Only integer amounts will be input, NO floats. This function should output a sequence, where each element in the array represents the amount of a certain bill type. The array will be set up in this manner:

  array[0] ---> represents $1 bills

  array[1] ---> represents $5 bills

  array[2] ---> represents $10 bills

  array[3] ---> represents $20 bills

  array[4] ---> represents $50 bills

  array[5] ---> represents $100 bills

  In the case below, we broke up $365 into 1 $5 bill, 1 $10 bill, 1 $50 bill, and 3 $100 bills.

  giveChange(365) // =>  [0,1,1,0,1,3]
  In this next case, we broke $217 into 2 $1 bills, 1 $5 bill, 1 $10 bill, and 2 $100 bills.

  giveChange(217) // => [2,1,1,0,0,2]

  Link: https://www.codewars.com/kata/5966f6343c0702d1dc00004c/train/javascript
*/

function giveChange(amount) {
  const banknotes = [100, 50, 20, 10, 5, 1];
  const res = [0, 0, 0, 0, 0, 0];

  let sum = amount;
  let i = 0;

  while (sum >= 0 && i < banknotes.length) {
    if (sum - banknotes[i] >= 0) {
      sum -= banknotes[i];
      res[i] = res[i] + 1;
    } else {
      i++;
    }
  }

  return res.reverse();
}

const giveChange2 = (amount) => {
  const bills = [100, 50, 20, 10, 5, 1];

  return bills
    .map((value) => {
      let result = Math.trunc(amount / value);
      amount = amount % value;

      return result;
    })
    .reverse();
};

console.log(giveChange(365)); // [0,1,1,0,1,3]
console.log(giveChange(217)); // [2,1,1,0,0,2]
console.log(giveChange(8)); // [3,1,0,0,0,0]
