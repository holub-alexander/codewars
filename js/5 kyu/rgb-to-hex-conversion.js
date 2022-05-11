/* 
  RGB To Hex Conversion

  The rgb function is incomplete. Complete it so that passing in RGB decimal values will result in a 
  hexadecimal representation being returned. Valid decimal values for RGB are 0 - 255. Any values that 
  fall out of that range must be rounded to the closest valid value.

  Note: Your answer should always be 6 characters long, the shorthand with 3 will not work here.

  The following are examples of expected output values:

  rgb(255, 255, 255) // returns FFFFFF
  rgb(255, 255, 300) // returns FFFFFF
  rgb(0,0,0) // returns 000000
  rgb(148, 0, 211) // returns 9400D3

  Link: https://www.codewars.com/kata/513e08acc600c94f01000001/train/javascript
*/

/* === Solution #1 === */

function rgb(r, g, b) {
  const colors = [r, g, b];
  let res = '';

  for (const value of colors) {
    const hexColor = value.toString(16);

    if (value < 0) {
      res += '00';

      continue;
    }

    if (value > 255) {
      res += 'ff';

      continue;
    }

    if (hexColor.length < 2) {
      res += '0' + hexColor;
    } else {
      res += hexColor;
    }
  }

  return res.toUpperCase();
}

console.log(rgb(0, 0, 0)); // 000000
console.log(rgb(0, 0, -20)); // 000000
console.log(rgb(300, 255, 255)); // FFFFFF
console.log(rgb(173, 255, 47)); // ADFF2F
console.log(rgb(138, 11, 78)); // 8A0B4E

/* === Solution #2 === */

const rgb2 = (r, g, b) => toHex(r) + toHex(g) + toHex(b);

const toHex = (num) => {
  if (num <= 0) return '00';
  if (num > 255) return 'FF';

  return ('0' + Number(num).toString(16)).slice(-2).toUpperCase();
};

console.log(rgb2(0, 0, 0)); // 000000
console.log(rgb2(0, 0, -20)); // 000000
console.log(rgb2(300, 255, 255)); // FFFFFF
console.log(rgb2(173, 255, 47)); // ADFF2F
console.log(rgb2(138, 11, 78)); // 8A0B4E
