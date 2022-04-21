/* 
  Dropcaps

  DropCaps means that the first letter of the starting word of the paragraph should be in caps and the remaining lowercase, just like you see in the newspaper.

  But for a change, let"s do that for each and every word of the given String. Your task is to capitalize every word that has length greater than 2, leaving smaller words as they are.

  *should work also on Leading and Trailing Spaces and caps.

  "apple"            => "Apple"
  "apple of banana"  => "Apple of Banana"
  "one   space"      => "One   Space 
  "   space WALK   " => "   Space Walk   " 
  Note: you will be provided atleast one word and should take string as input and return string as output.

  Link: https://www.codewars.com/kata/559e5b717dd758a3eb00005a/train/javascript
*/

const dropCap = (str) => {
  return str
    .split(' ')
    .map((word) => {
      const formatStr = word.toLowerCase();

      return formatStr.length > 2 ? formatStr[0].toUpperCase() + formatStr.slice(1) : word;
    })
    .join(' ');
};

console.log(dropCap('Apple Banana')); // Apple Banana
console.log(dropCap('more  than    one space between words')); // More  Than    One Space Between Words
console.log(dropCap('ALL CAPS CRAZINESS')); // All Caps Craziness
