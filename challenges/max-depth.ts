/*

Given an arbitrarily nested array of arrays, return the maximum depth.

For example:

maxDepth([3, 2]) -> 1 (non-nested array, so maximum depth is 1 level)
maxDepth([]) -> 1 (array may be empty)

maxDepth([3, [6, 7], 2]) -> 2 (maximum depth is 2 levels)
maxDepth([[2, 1], 8, 3, [4], 5]) -> 2 (maximum depth is 2 levels)
maxDepth([3, [], 2]) -> 2 (inner arrays may be empty, but still count towards depth)

maxDepth([3, [6, [7]], 2]) -> 3 (maximum depth is 3 levels)

maxDepth([4, [0, [[3], 2]], 2, 7, 8, [1]]) -> 4 (maximum depth is 4 levels)

*/


//we use recursion to solve this problem.
type NestedArray = (number | NestedArray)[];

const maxDepth = (arr: NestedArray): number => {
  // BASE CASE: if the array is empty, it still counts as 1 level of depth
   if (arr.length === 0) return 1;

   let max = 1; // start with a minimum depth of 1 for the current level

   for (const element of arr) {
     if (Array.isArray(element)) {
       // RECURSIVE CASE: if the element is an array, we need to check its depth
       const depth = 1 + maxDepth(element); // add 1 for the current level
       max = Math.max(max, depth); // update max if this path is deeper
     }
   }

   return max; // return the maximum depth found
};

export default maxDepth;
