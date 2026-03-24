/*

Write a function called commonElements that takes in any number of arrays in the 
argument. The arrays may contain both numbers and strings. It should return a new array
with all the common elements (both numbers and/or strings) from the given input. 
If there are no common numbers/strings, return "Nothing in Common!"
Assume there are no duplicates within the array.

ex: 
arr1 = [2, 10,'cat', 3, 99, 2000, 'dog', 'lion'];
arr2 = [3, 7, 2, 2000, 1, 'dog', 'cat'];
arr3 = [2, 100, 2000, 'dog', 3, 'lion'];

commonElements(arr1, arr2, arr3) -> [2, 3, 2000, 'dog']

After completing your initial approach, try refactoring your solution so that it completes in O(n) time.

*/

const commonElements = (
  ...args: (string | number)[][]
): (string | number)[] | 'Nothing in Common!' => {
   // Initialize a cache to count occurrences
  const cache: Record<string, number> = {};
  // Initialize array to store the common elements
  const commonElements: (string | number)[] = [];
  // Flatten the input arrays and process each element
  args.flat().forEach((element: string | number) => {
    // Update the cache: increment count or initialize to 1
    cache[element] = (cache[element] || 0) + 1;
    // If element count matches the number of input arrays, element
    // is common among all arrays and added to commonElements array
    if (cache[element] === args.length) {
      commonElements.push(element);
    }
  });
  // Return the common elements or "Nothing in Common!" if none found
  return commonElements.length ? commonElements : 'Nothing in Common!';
  
};

/*
** Extension **
Now assume that there may be duplicate values within a single array.
Refactor your function to make sure it continues to return a new array
with all the common elements (with any duplicates removed).

ex:
arr1 = [2, 2, 10, 'dog', 'lion', 2, 2000];
arr2 = [7, 2, 'cat', 7, 7, 'lion', 7, 2000];
arr3 = [2, 100, 'lion', 2000];

commonElementsDuplicates(arr1, arr2, arr3) -> [2, 'lion', 2000]

*/

const commonElementsDuplicates = (
  ...args: (string | number)[][]
): (string | number)[] | 'Nothing in Common!' => {
  return [];
};

export { commonElements, commonElementsDuplicates };
