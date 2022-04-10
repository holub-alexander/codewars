/* 
  Roman Numerals Helper

  Create a RomanNumerals class that can convert a roman numeral to and from an integer value. It should follow the API demonstrated in the examples below. Multiple roman numeral values will be tested for each helper method.

  Modern Roman numerals are written by expressing each digit separately starting with the left most digit and skipping any digit with a value of zero. In Roman numerals 1990 is rendered: 1000=M, 900=CM, 90=XC; resulting in MCMXC. 2008 is written as 2000=MM, 8=VIII; or MMVIII. 1666 uses each Roman symbol in descending order: MDCLXVI.

  Input range : 1 <= n < 4000

  In this kata 4 should be represented as IV, NOT as IIII (the "watchmaker's four").

  Examples
  RomanNumerals.toRoman(1000); // should return 'M'
  RomanNumerals.fromRoman('M'); // should return 1000

  Link: https://www.codewars.com/kata/51b66044bce5799a7f000003/train/javascript
*/

class RomanNumerals {
  number = 0;
  romanNumerals = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  romanNumerals2 = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
  };

  constructor(num) {
    this.number = num;
    console.log(this.number);
  }

  static toRoman(num) {
    const instance = new RomanNumerals(num);

    return instance.converToRomanNumerals(num);
  }

  static fromRoman(string) {
    const instance = new RomanNumerals(string);

    return instance.convertToArabicNumerals(string);
  }

  converToRomanNumerals(num) {
    this.number = num;

    let i = num;
    let roman = '';

    for (const key in this.romanNumerals2) {
      while (i >= this.romanNumerals2[key]) {
        roman += key;
        i -= this.romanNumerals2[key];
      }
    }

    return roman;
  }

  convertToArabicNumerals(string) {
    this.number = string;

    let res = 0;
    let value = 0;
    let prev = 0;

    for (let i = 0; i < string.length; i++) {
      const current = this.romanNumerals[string[i]];

      if (current > prev) {
        res -= 2 * value;
      }

      if (current !== prev) {
        value = 0;
      }

      value += current;
      res += current;
      prev = current;
    }

    return res;
  }
}

console.log(RomanNumerals.toRoman(1000)); // M
console.log(RomanNumerals.toRoman(2008)); // MMVIII
console.log(RomanNumerals.fromRoman('MMVIII')); // 2008
console.log(RomanNumerals.fromRoman('MDCLXVI')); // 1666
