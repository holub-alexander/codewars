/* 
  sPoNgEbOb MeMe

  You need to create a function that converts the input into this format, with the output 
  being the same string expect there is a pattern of uppercase and lowercase letters.

  Example:
  input:  "stop Making spongebob Memes!"
  output: "StOp mAkInG SpOnGeBoB MeMeS!"

  Link: https://www.codewars.com/kata/5982619d2671576e90000017/train/javascript
*/

const spongeMeme = (sentence) =>
  sentence.replace(/./g, (v, i) => (i % 2 === 0 ? v.toUpperCase() : v.toLowerCase()));

console.log(spongeMeme('stop Making spongebob Memes!')); // StOp mAkInG SpOnGeBoB MeMeS!
console.log(spongeMeme('Hello world!')); // HeLlO WoRlD!
