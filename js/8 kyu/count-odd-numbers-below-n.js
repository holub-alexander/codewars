/* 
  Count Odd Numbers below n

  Given a number n, return the number of positive odd numbers below n, EASY!

  Examples (Input -> Output)
  * 7  -> 3 (because odd numbers below 7 are [1, 3, 5])
  * 15 -> 7 (because odd numbers below 15 are [1, 3, 5, 7, 9, 11, 13])

  Link: https://www.codewars.com/kata/59342039eb450e39970000a6/train/javascript
*/

const oddCount = (n) => {
  const odd = [];

  for (let i = 0; i < n; i++) {
    if (i % 2 !== 0) {
      odd.push(i);
    }
  }

  return odd.length;
};

console.log(oddCount(15)); // 7
console.log(oddCount(15023)); // 7511
