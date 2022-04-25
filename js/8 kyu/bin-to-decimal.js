/* 
  Bin to Decimal

  Complete the function which converts a binary number (given as a string) to a decimal number.

  Link: https://www.codewars.com/kata/57a5c31ce298a7e6b7000334/train/javascript
*/

const binToDec1 = (bin) => {
  let sum = 0;

  for (let i = bin.length - 1, j = 0; i >= 0; i--) {
    if (bin[i] === '1') {
      sum += Math.pow(2, j);
    }

    j++;
  }

  return sum;
};

const binToDec2 = (bin) => parseInt(bin, 2);

console.log(binToDec1('1')); // 1
console.log(binToDec1('0')); // 0
console.log(binToDec1('1001001')); // 73

console.log(binToDec2('1')); // 1
console.log(binToDec2('0')); // 0
console.log(binToDec2('1001001')); // 73
