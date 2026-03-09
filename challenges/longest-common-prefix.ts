/* Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "". (Note: All given inputs are in lowercase letters a-z.)

ex: longestCommonPrefix(["flower","flow","flight"]) --> "fl"

longestCommonPrefix(["dog","racecar","car"]) --> "" (There is no common prefix among the input strings)

*/

const longestCommonPrefix = (strs: string[]): string => {
  
   // EDGE CASE: if the array is empty there are no strings to compare
  // so we return an empty string immediately
  if (strs.length === 0) return '';

  // OUTER LOOP: iterate over each CHARACTER POSITION in the first word
  // ex: "flower" has length 6, so i goes 0, 1, 2, 3, 4, 5
  // think of i as your finger pointing at a column, sliding right each iteration
  for (let i = 0; i < strs[0].length; i++) {

    // grab the character at the current position in the first word
    // this is our reference letter — we want everyone else to match this
    // ex: i=0 → char='f', i=1 → char='l', i=2 → char='o'
    const char = strs[0][i];

    // INNER LOOP: for this character position, check every OTHER word
    // j starts at 1 because j=0 is the first word — no point comparing it to itself
    // ex: j=1 → "flow", j=2 → "flight"
    for (let j = 1; j < strs.length; j++) {

      // BAIL OUT CONDITION — two reasons to stop, either one is enough to stop:

      // REASON 1: i >= strs[j].length
      // the current word is SHORTER than the first word
      // our finger is pointing past the end of it — the character doesn't exist
      // ex: first word is "flower", current word is "flow" (length 4)
      //     when i=4, "flow"[4] doesn't exist → stop

      // REASON 2: strs[j][i] !== char
      // the current word HAS a character at this position
      // but it DOESN'T match our reference character
      // ex: i=2, char='o', "flight"[2]='i' → 'i' !== 'o' → stop

      if (i >= strs[j].length || strs[j][i] !== char) {

        // slice(0, i) returns everything from index 0 UP TO BUT NOT INCLUDING index i
        // i is where the mismatch happened, so we want everything before it
        // ex: i=2, "flower".slice(0, 2) → "fl"
        //          f  l  o  w  e  r
        //          0  1  2
        //                ↑ mismatch here → grab "fl"
        return strs[0].slice(0, i);
      }
    }
    // if we get here, ALL words matched at position i
    // move the outer loop forward to check the next character position
  }

  // if the outer loop finishes WITHOUT ever bailing out
  // it means the entire first word matched across all other words
  // ex: ["same", "same", "same"] → return "same"
  return strs[0];

};

export { longestCommonPrefix };
