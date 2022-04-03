/* 
  Human Readable Time

  Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

  HH = hours, padded to 2 digits, range: 00 - 99
  MM = minutes, padded to 2 digits, range: 00 - 59
  SS = seconds, padded to 2 digits, range: 00 - 59
  The maximum time never exceeds 359999 (99:59:59)

  You can find some examples in the test fixtures.

  Link: https://codewars.com/kata/52685f7382004e774f0001f7/train/javascript
*/

function humanReadable(seconds) {
  const hours = Math.trunc(seconds / 3600);
  const restSeconds = seconds - hours * 3600;
  const minutes = Math.trunc(restSeconds / 60);
  const newSeconds = Math.trunc(restSeconds % 60);

  const formatNumber = (num) => (num < 10 ? `0${num}` : num);

  return `${formatNumber(hours)}:${formatNumber(minutes)}:${formatNumber(newSeconds)}`;
}

console.log(humanReadable(0)); // 0
console.log(humanReadable(3599)); // 00:59:59
console.log(humanReadable(359999)); // 99:59:59
