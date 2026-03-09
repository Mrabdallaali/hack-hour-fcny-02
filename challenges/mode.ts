/*

Given an array of numbers, return the mode (the number that appears most often).
If there are multiple modes, use the max of the modes.

Assume that at least one number is present in the array.

e.g.
mode([3, 2, 4, 3]) -> 3
mode([7, 5, 8, 8, 2, 5]) -> 8

*/

const mode = (array: number[]): number => {
  // Create an empty map to store each number and how many times it appears
  // Key = the number, Value = its count
  const counts = new Map<number, number>();

  // Loop through every number in the array
  for (const num of array) {
    // If the number exists, add 1 to its count. If not, start from 0 then add 1
    counts.set(num, (counts.get(num) ?? 0) + 1);
  }

  // Track the highest count seen so far
  let maxCount = 0;
  // Track the winning number to return at the end
  let results = 0;

  // Loop through the finished map, unpacking each pair into num and count
  for (const [num, count] of counts) {
    // Update our winner if:
    // 1. This count is higher than the best so far, OR
    // 2. It's a tie but this number is larger
    if (count > maxCount || (count === maxCount && num > results)) {
      maxCount = count;
      results = num;
    }
  }

  // Return the number that appeared most often (or the largest if tied)
  return results;
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
