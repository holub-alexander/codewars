/* 
  Valid braces

  Write a function that takes a string of braces, and determines if the order of the braces is valid. It should return true if the string is valid, and false if it's invalid.

  This Kata is similar to the Valid Parentheses Kata, but introduces new characters: brackets [], and curly braces {}. Thanks to @arnedag for the idea!

  All input strings will be nonempty, and will only consist of parentheses, brackets and curly braces: ()[]{}.

  What is considered Valid?
  A string of braces is considered valid if all braces are matched with the correct brace.

  Examples
  "(){}[]"   =>  True
  "([{}])"   =>  True
  "(}"       =>  False
  "[(])"     =>  False
  "[({})](]" =>  False
*/

function validBraces(braces) {
  const res = [];

  for (let i = 0; i < braces.length; i++) {
    const openBracketsRegExp = braces[i].match(/[{[(]/);
    const closeBracketsRegExp = braces[i].match(/[}\])]/);

    if (openBracketsRegExp) {
      res.push(braces[i]);
    }

    if (closeBracketsRegExp) {
      const lastValue = res[res.length - 1];

      if (res.length === 0) {
        return false;
      }

      if (
        (braces[i] === ')' && lastValue === '(') ||
        (braces[i] === ']' && lastValue === '[') ||
        (braces[i] === '}' && lastValue === '{')
      ) {
        res.pop();
      } else {
        break;
      }
    }
  }

  return res.length === 0;
}

console.log(validBraces('(){}[]')); // true
console.log(validBraces('([{}])')); // true
console.log(validBraces('[({})](]')); // false
