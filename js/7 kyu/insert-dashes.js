/* 
  Insert dashes

  Write a function insert_dash(num) / insertDash(num) / InsertDash(int num) that will insert dashes ('-') 
  between each two odd digits in num. For example: if num is 454793 the output should be 4547-9-3. Don't 
  count zero as an odd digit.

  Note that the number will always be non-negative (>= 0).

  Link: https://www.codewars.com/kata/55960bbb182094bc4800007b/train/javascript
*/

function insertDash1(num) {
  const str = num.toString();
  let res = '';

  for (let i = 0; i < str.length; i++) {
    if (str[i] % 2 && str[i + 1] % 2) {
      res += `${str[i]}-`;
    } else {
      res += str[i];
    }
  }

  return res;
}

console.log(insertDash1(454793)); // 4547-9-3
console.log(insertDash1(123456)); // 123456
console.log(insertDash1(1003567)); // 1003-567

function insertDash2(num) {
  return num.toString().replace(/[13579](?=[13579])/g, '$&-');
}

console.log(insertDash2(454793)); // 4547-9-3
console.log(insertDash2(123456)); // 123456
console.log(insertDash2(1003567)); // 1003-567
