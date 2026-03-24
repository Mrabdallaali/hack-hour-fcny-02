/* Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "". (Note: All given inputs are in lowercase letters a-z.)

ex: longestCommonPrefix(["flower","flow","flight"]) --> "fl"

longestCommonPrefix(["dog","racecar","car"]) --> "" (There is no common prefix among the input strings)

*/

//Approach solution
const longestCommonPrefix = (strs: string[]): string => {
  let result = "";
  // iterate through each character of the first string in strs
  // note how the "optional chaining operator" (?.) allows us to safely access length, even if strs is empty!
  for (let i = 0; i < strs[0]?.length; i++) {
    // iterate through each string in the array
    for (let str of strs) {
      // if any string in the array doesn't contain the same character at index i as the initial string, immediately return
      if (str[i] !== strs[0][i]) return result;
    }
    // if each string in the array contains this character, add it to the result
    result += strs[0][i];
  }
  return result;
};

export { longestCommonPrefix };
