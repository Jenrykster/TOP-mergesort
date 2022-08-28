const arr = [1, 4, 2, 3, 5, 8, 7, 6];

/* 
  Divide
  Sort
  Merge
*/

const merge = (arr1, arr2) => {
  let counter1 = 0;
  let counter2 = 0;
  let mergedArray = [];
  while (mergedArray.length < arr1.length + arr2.length) {
    if (
      (arr1[counter1] && arr1[counter1] < arr2[counter2]) ||
      arr2[counter2] === undefined
    ) {
      mergedArray.push(arr1[counter1]);
      counter1++;
    } else {
      mergedArray.push(arr2[counter2]);
      counter2++;
    }
  }
  return mergedArray;
};

const divide = (arrayToSort) => {
  const firstArray = arrayToSort.slice(0, arrayToSort.length / 2);
  const secondArray = arrayToSort.slice(
    arrayToSort.length / 2,
    arrayToSort.length
  );
  return [firstArray, secondArray];
};

const mergeSortRecursive = (arrayToSort = []) => {
  if (arrayToSort.length === 1) {
    return arrayToSort;
  } else {
    const [arr1, arr2] = divide(arrayToSort);
    let ret1 = mergeSortRecursive(arr1);
    let ret2 = mergeSortRecursive(arr2);
    return merge(ret1, ret2);
  }
};

console.log("ENTRADA: ", arr);
console.log("SAÍDA", mergeSortRecursive(arr));
