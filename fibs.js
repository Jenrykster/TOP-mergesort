console.log("Hello, World");

/**
 *
 * @param {number} n  Size of the array
 * @returns {number[]} The fibonnaci sequence
 */
const fibs = (n) => {
  let arr = [0, 1];

  for (let i = 0; i < n - 2; i++) {
    arr.push(arr[i] + arr[i + 1]);
  }

  return arr;
};

const recFibs = (n, arr = [0, 1]) => {
  if (n === 2) {
    return arr;
  } else {
    return recFibs(
      n - 1,
      arr.concat(arr[arr.length - 2] + arr[arr.length - 1])
    );
  }
};

console.log(recFibs(8));
