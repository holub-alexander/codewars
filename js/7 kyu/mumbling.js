/* 
  Mumbling

  This time no story, no theory. The examples below show you how to write function accum:

  Examples:
  accum("abcd") -> "A-Bb-Ccc-Dddd"
  accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
  accum("cwAt") -> "C-Ww-Aaa-Tttt"
  The parameter of accum is a string which includes only letters from a..z and A..Z.

  Link: https://www.codewars.com/kata/5667e8f4e3f572a8f2000039/train/javascript
*/

const accum = (s) => {
  return s
    .split('')
    .map((c, i) => c.toUpperCase() + c.toLowerCase().repeat(i))
    .join('-');
};

console.log(accum('ZpglnRxqenU')); // Z-Pp-Ggg-Llll-Nnnnn-Rrrrrr-Xxxxxxx-Qqqqqqqq-Eeeeeeeee-Nnnnnnnnnn-Uuuuuuuuuuu
console.log(accum('HbideVbxncC')); // H-Bb-Iii-Dddd-Eeeee-Vvvvvv-Bbbbbbb-Xxxxxxxx-Nnnnnnnnn-Cccccccccc-Ccccccccccc
console.log(accum('')); // ''
