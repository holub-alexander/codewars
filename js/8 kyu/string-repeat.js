/*
  String repeat

  Write a function called repeatStr which repeats the given string string exactly n times.

  repeatStr(6, "I") // "IIIIII"
  repeatStr(5, "Hello") // "HelloHelloHelloHelloHello"

  Link: https://www.codewars.com/kata/57a0e5c372292dd76d000d7e/train/javascript
*/

const repeatStr = (n, s) => s.repeat(n);

console.log(repeatStr(3, '*')); // ***
console.log(repeatStr(5, '#')); // #####
console.log(repeatStr(2, 'ha ')); // ha ha
