/* 
  Human readable duration format

  Your task in order to complete this Kata is to write a function which formats a duration, given as a number of seconds, in a human-friendly way.

  The function must accept a non-negative integer. If it is zero, it just returns "now". Otherwise, the duration is expressed as a combination of years, days, hours, minutes and seconds.

  It is much easier to understand with an example:

  * For seconds = 62, your function should return 
      "1 minute and 2 seconds"
  * For seconds = 3662, your function should return
      "1 hour, 1 minute and 2 seconds"
  For the purpose of this Kata, a year is 365 days and a day is 24 hours.

  Note that spaces are important.

  Detailed rules
  The resulting expression is made of components like 4 seconds, 1 year, etc. In general, a positive integer and one of the valid units of time, separated by a space. The unit of time is used in plural if the integer is greater than 1.

  The components are separated by a comma and a space (", "). Except the last component, which is separated by " and ", just like it would be written in English.

  A more significant units of time will occur before than a least significant one. Therefore, 1 second and 1 year is not correct, but 1 year and 1 second is.

  Different components have different unit of times. So there is not repeated units like in 5 seconds and 1 second.

  A component will not appear at all if its value happens to be zero. Hence, 1 minute and 0 seconds is not valid, but it should be just 1 minute.

  A unit of time must be used "as much as possible". It means that the function should not return 61 seconds, but 1 minute and 1 second instead. Formally, the duration specified by of a component must not be greater than any valid more significant unit of time.

  Link: https://www.codewars.com/kata/52742f58faf5485cae000b9a/train/javascript
*/

const addEndingToWords = (num, type) => {
  const typesArr = ['year', 'day', 'hour', 'minute', 'second'];
  let word = '';

  if (num <= 0) {
    return '';
  }

  word = `${num} ${typesArr[typesArr.indexOf(type)]}`;

  return num > 1 ? `${word}s` : word;
};

const formTimeString = (strObject) => {
  const formatStrObject = Object.assign(strObject, {});
  let res = '';

  Object.keys(formatStrObject).forEach((key) => {
    if (formatStrObject[key] === '') {
      delete formatStrObject[key];
    }
  });

  if (formatStrObject['minute'] && formatStrObject['second']) {
    formatStrObject[
      'minute-second'
    ] = `${formatStrObject['minute']} and ${formatStrObject['second']}`;

    delete formatStrObject['minute'];
    delete formatStrObject['second'];
  }

  if (formatStrObject['hour'] && formatStrObject['minute']) {
    formatStrObject['hour-minute'] = `${formatStrObject['hour']} and ${formatStrObject['minute']}`;

    delete formatStrObject['hour'];
    delete formatStrObject['minute'];
  }

  if (formatStrObject['hour'] && formatStrObject['second']) {
    formatStrObject['hour-second'] = `${formatStrObject['hour']} and ${formatStrObject['second']}`;

    delete formatStrObject['hour'];
    delete formatStrObject['second'];
  }

  res = Object.values(formatStrObject).join(', ') || 'now';

  return res;
};

const formatDuration = (secondsNum) => {
  const years = Math.trunc(secondsNum / (365 * 86400));
  const days = Math.trunc((secondsNum % (365 * 86400)) / 86400);
  const hours = Math.trunc((secondsNum % (24 * 60 * 60)) / 3600);
  const minutes = Math.trunc((secondsNum % (60 * 60)) / 60);
  const seconds = secondsNum % 60;

  return formTimeString({
    year: addEndingToWords(Math.abs(years), 'year'),
    day: addEndingToWords(Math.abs(days), 'day'),
    hour: addEndingToWords(Math.abs(hours), 'hour'),
    minute: addEndingToWords(Math.abs(minutes), 'minute'),
    second: addEndingToWords(Math.abs(seconds), 'second'),
  });
};

console.log(formatDuration(3662)); // 1 hour, 1 minute and 2 seconds
console.log(formatDuration(3600)); // 1 hour
console.log(formatDuration(90000000)); // 2 years, 311 days, 16 hours
