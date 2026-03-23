/*

Given an arbitrarily nested array of strings, and a target keyword string,
return the number of times a keyword appears in a nested array of arrays.

keywordCount(['bye', 'hi', ['cool', 'hi']], 'hi') -> 2 
keywordCount(['x', 'y', ['x', 'x'], 'a'], 'x') -> 3
keywordCount(['blah', 'key', ['inside', ['really inside']]], 'lol') -> 0

*/

type NestedArray = (string | NestedArray)[];

const keywordCount = (array: NestedArray, keyword: string): number => {
  let count = 0;

  for (const element of array) {
    if (typeof element === 'string') {
      if (element === keyword) {
        count++;
      }
    } else {
      count += keywordCount(element, keyword); // RECURSIVE CALL: if it's an array, we need to go deeper
    }
  }

  return count; // Return the total count of the keyword found in the nested array
};


//using reduce
const keywordCount = (array: NestedArray, keyword: string): number => {
  return array.reduce((count, element) => {
    if (Array.isArray(element)) {
      return count + keywordCount(element, keyword); // recurse into sub-array (if an array)
    }
    return count + (element === keyword ? 1 : 0);   // base case: it's a string
  }, 0);  //start with a count of 0
};

/*

Extension:

Given a nested array of arrays, return an array of keywords that appear the most
often. Return multiple results within the array if there's a tie. Return the
most common strings in lexiographical (alphabetic) order.

keywordMode([['cars', 'bat'], 'apple', 'bat', 'cars']) -> ['bat', 'cars']
keywordMode([['ace', 'cool'], ['hi'], 'cool']) -> ['cool']

*/

const keywordMode = (array: NestedArray): string[] => {
  return [];
};

export { keywordCount, keywordMode, NestedArray };
