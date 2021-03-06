/* 
  Moving Zeros To The End

  Write an algorithm that takes an array and moves all of the zeros to the end, 
  preserving the order of the other elements.

  moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]

  Link: https://www.codewars.com/kata/52597aa56021e91c93000cb0/train/javascript
*/

function moveZeros(arr) {
  const zeros = [];
  const res = arr.filter((item) => {
    if (item === 0) {
      zeros.push(0);

      return false;
    }

    return true;
  });

  return [...res, ...zeros];
}

console.log(moveZeros([false, 1, 0, 1, 2, 0, 1, 3, 'a'])); // [false, 1, 1, 2, 1, 3, "a", 0, 0]
console.log(moveZeros([1, 2, 0, 1, 0, 1, 0, 3, 0, 1])); // [1, 2, 1, 1, 3, 1, 0, 0, 0, 0]
