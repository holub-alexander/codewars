/* 
  Two to One    

  Take 2 strings s1 and s2 including only letters from ato z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

  Examples:
  a = "xyaabbbccccdefww"
  b = "xxxxyyyyabklmopq"
  longest(a, b) -> "abcdefklmopqwxy"

  a = "abcdefghijklmnopqrstuvwxyz"
  longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"
*/

function longest(s1, s2) {
  const set = new Set(`${s1}${s2}`.split('').sort());
  let res = '';

  for (let value of set.values()) {
    res += value;
  }

  return res;
}

console.log(longest('aretheyhere', 'yestheyarehere')); // "aehrsty"
console.log(longest('loopingisfunbutdangerous', 'lessdangerousthancoding')); // "abcdefghilnoprstu"
