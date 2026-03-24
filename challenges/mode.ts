/*

Given an array of numbers, return the mode (the number that appears most often).
If there are multiple modes, use the max of the modes.

Assume that at least one number is present in the array.

e.g.
mode([3, 2, 4, 3]) -> 3
mode([7, 5, 8, 8, 2, 5]) -> 8

*/

const mode = (array: number[]): number => {
  //initialize a tally to keep track of the count of each number
  const tally = new Map<number, number>();

  let mode = -Infinity; //initialize mode to negative infinity to handle cases where all numbers are negative
  let maxCount = 0; //initialize maxCount to keep track of the highest count

  for (const num of array) {
    //get the count of the current number from the tally, defaulting to 0 if it doesn't exist
    let count = tally.get(num) ?? 0;
    //increment the count for the current number
    tally.set(num, ++count);

    //if the count of the current number is greater than the maxCount, update the mode and maxCount
    if (count > maxCount) {
      mode = num;
      maxCount = count;
    } else if (count === maxCount) {
      //if the count is equal to the maxCount, update the mode to the maximum of the current mode and the current number
      mode = Math.max(mode, num);
    }
  }

  return mode;
};

/*

Extension:

Given an arbitrarily nested array of numbers, return the mode.
If there are multiple modes, use the max of the modes.

Assume that at least one number is present in the nested array structure,
although some of the inner nested arrays may be empty.

e.g.
modeNested([[3], [2, [4]], 3]) -> 3
modeNested([7, [[5, [8], 8], 2, 5]]) -> 8
modeNested([4, []]) -> 4 

*/

type NestedArray<T> = (T | NestedArray<T>)[];

const modeNested = (array: NestedArray<number>): number => {
  return 0;
};

export { mode, modeNested, NestedArray };
