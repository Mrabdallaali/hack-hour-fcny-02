/*

Given an array of integers, sort the array in-place and return the array.
Do not create a new array in memory. Instead, modify the array as given. Do not
use the array sort method built in to the array prototype while solving the
problem. The integers should be in ascending order from left to right.

We will sort the array using a strategy called selection sort, which works as
follows. First, put the smallest number in the array at position 0. Then, put
the second-smallest number in the array at position 1. Then, put the
third-smallest number in the array at position 2 etc. After going through the
whole array, the array will end up being sorted.

*/

export const selectionSort = (arr: number[]): number[] => {
  // outer loop: each round we fill position i with the correct value
  // stop at length - 1 because the last element falls into place automatically
  for (let i = 0; i < arr.length - 1; i++) {

    // assume the current position is the smallest
    let minIndex = i;

    // inner loop: scan everything to the right of i to find the true minimum
    for (let j = i + 1; j < arr.length; j++) {

      // if we find something smaller, update minIndex
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }

    // only swap if the minimum isn't already in the correct position
    if (minIndex !== i) {
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
    // everything to the left of i is now sorted
  }

  return arr;
};

/* 
The mental model in one sentence — each round of the outer loop finds the smallest remaining number and drops it into its correct position, until the whole array is sorted.
*/
/*

Extension:

Given an array of integers, sort the array in-place and return the array.
Do not create a new array in memory. Instead, modify the array as given. Do not
use the array sort method built in to the array prototype while solving the
problem. The integers should be in ascending order from left to right.

For this extension, we will use a strategy called insertion sort, which works as
follows. Imagine that the first k - 1 numbers of the array are in ascending
order. We take the kth number and insert it into the correct position amongst
the k - 1 numbers such that now, the first k numbers of the array are in
ascending order. In other words:

The first value in the array is considered to be already fine.
The second value is either placed before/after the first value.
The third value is inserted in the correct position amongst the first two values.
The fourth value is inserted in the correct position amongst the first three values.
etc.

*/

export const insertionSort = (arr: number[]): number[] => {
  return [];
};
