/*

Given an arbitrarily nested array of numbers and a positive integer "depth",
return a new array consisting of the numbers with depth less than or equal to
the provided depth, in order of appearance.

The original array is considered to be at depth 1, and inner arrays are at
greater depth.

For example:

retrieveDepth([2, [4, [7], 1], 5], 1) -> [2, 5] because only the 2 and 5 are at
"depth 1", and everything else is too deep. The 4 and 1 are at "depth 2", and
the 7 is at "depth 3".

retrieveDepth([2, [4, [7], 1], 5], 2) -> [2, 4, 1, 5] becuase the 2 and 5 are at
"depth 1", the 4 and 1 are at "depth 2", and the 7 is too deep because it's at
"depth 3".

retrieveDepth([2, [4, [7], 1], 5], 3) -> [2, 4, 7, 1, 5] because every number
is within "depth 3". No number is deeper.

*/

type NestedArr<T> = (T | NestedArr<T>)[];

export const retrieveDepth = (
  arr: NestedArr<number>,
  depth: number,
  currentDepth: number = 1, //add an optional parameter to keep track of the current depth as we recurse
): number[] => {
  const result: number[] = [];

  for (const element of arr) {
    if (typeof element === 'number') {
      // If it's a number and we're within the desired depth, add it to the result
      if (currentDepth <= depth) {
        result.push(element);
      }
    } else {
      // If it's an array, we need to go deeper
      // We call retrieveDepth recursively on the nested array, increasing the current depth by 1
      const nestedResult = retrieveDepth(element, depth, currentDepth + 1);
      result.push(...nestedResult); // Spread the nested results into our main result array
    }
  }

  return result; // Return the collected numbers that are within the specified depth  
};

/*

Extension:

Given an arbitrarily nested array of numbers and a nonnegative integer "depth",
return a new nested array that's flattened to a certain level of depth.

Flattening at "depth 0" just returns the same array.
Flattening at "depth 1" returns the array flattened at just one level.

For example:

flattenDepth([2, [4, [7], 1], 5], 0)
  -> [2, [4, [7], 1], 5] // the same array

flattenDepth([2, [4, [7], 1], 5], 1)
  -> [2, 4, [7], 1, 5] // flattened at one level

flattenDepth([2, [4, [7], 1], 5], 2)
  -> [2, 4, 7, 1, 5] // flattened at two levels

flattenDepth([2, [4, [7], 1], 5], 3)
  -> [2, 4, 7, 1, 5] // flattening at greater levels just produces a completely
flattened array

*/

export const flattenDepth = (
  arr: NestedArr<number>,
  depth: number,
): NestedArr<number> => {
  return [];
};
