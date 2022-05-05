/* 
  Credit Card Mask

  Usually when you buy something, you're asked whether your credit card number, phone number or answer 
  to your most secret question is still correct. However, since someone could look over your shoulder, 
  you don't want that shown on your screen. Instead, we mask it.

  Your task is to write a function maskify, which changes all but the last four characters into '#'.

  Examples
  "4556364607935616" --> "############5616"
      "64607935616" -->      "#######5616"
                "1" -->                "1"
                "" -->                 ""

  // "What was the name of your first pet?"

  "Skippy" --> "##ippy"

  "Nananananananananananananananana Batman!"
  -->
  "####################################man!"

  Link: https://www.codewars.com/kata/5412509bd436bd33920011bc/train/javascript
*/

const maskify1 = (str) => (str.length > 4 ? '#'.repeat(str.length - 4) + str.slice(-4) : str);

console.log(maskify1('4556364607935616')); // ############5616
console.log(maskify1('1')); // 1
console.log(maskify1('11111')); // #1111

const maskify2 = (str) => str.slice(0, -4).replace(/./g, '#') + str.slice(-4);

console.log(maskify2('4556364607935616')); // ############5616
console.log(maskify2('1')); // 1
console.log(maskify2('11111')); // #1111
