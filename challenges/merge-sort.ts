/* 

  Given an array of integers, sort and return the array.
  The sorted integers should be in ascending order from left to right.
  Do not use the array sort method built in to the array prototype while solving the
  problem. 

  We will sort the array using a strategy called merge sort, which functions as follows:
  First, split the array by half until each array contains a single element.
  Then, compare each set of elements and combine them into a sorted pair.
  Next, compare sorted sets of elements and combine them in order to form a new sorted array.
  Continue this process until the entire array is sorted.
  
*/

const mergeSort = (array: number[]): number[] => {
    const mergeSort = (array: number[]): number[] => {
  
  // base case: single element is already sorted, return it
  if (array.length <= 1) return array;

  // find the middle index to split the array in half
  const mid = Math.ceil(array.length / 2);

  // recursively split and sort the left half
  const left = mergeSort(array.slice(0, mid));

  // recursively split and sort the right half
  const right = mergeSort(array.slice(mid));

  // create an empty array to build our sorted result
  const sortedArray: number[] = [];

  // compare first elements of each half, take the smaller one
  // shift() removes and returns the first element
  // keep going until one of the arrays is empty
  while (left.length && right.length) {
    left[0] < right[0]
      ? sortedArray.push(left.shift()!)
      : sortedArray.push(right.shift()!);
  }

  // spread sortedArray plus any remaining elements
  // the leftover element will always be the largest
  return [...sortedArray, ...left, ...right];
};
};

export default mergeSort;
